import Link from 'next/link'
import Head from 'next/head'
import type { BlockDetail } from '../api/blocks/[id]'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Main, Anchor, Heading, Button, Paragraph } from 'grommet'
import axios from 'axios'
import Layout from '../../components/layout'

const fetchBlock = async (id: string = "") => {
  let res = { data: null }
  try {
    res = await axios.get(`/api/blocks/${id}`)
  } catch (e) {
    console.error(e)
  } finally {
    return res.data
  }
}

const Detail: NextPage = () => {

  const router = useRouter()
  const { id } = router.query

  const [block, setBlock] = useState<BlockDetail | null>(null)

  useEffect(() => { (async () => setBlock(await fetchBlock(id?.toString())))() }, [id])

  return (
    <Layout title="Block Detail" description="Block Detail View">
      <Box gap="small" direction="row" alignSelf="center">
        <Link passHref href="/blocks/">
          <Button 
            primary 
            alignSelf="start"
            label="Back to Blocks"
          />
        </Link>
        <Link passHref href={`/blocks/${id}/transactions`}>
          <Button 
            secondary
            alignSelf="start"
            label="Transactions"
          />
        </Link>
      </Box>
      {block !== null && (
        <Main align="center">
          <Heading>...{id?.toString().substring(35)}</Heading>
          
          <Link passHref href={`/blocks/${block.prev_block}`}>
            <Anchor label={`${block.prev_block.toString()}`}></Anchor>
          </Link>
          <Link passHref href={`/blocks/${block.next_block}`}>
            <Anchor label={`${block.next_block.toString()}`}></Anchor>
          </Link>
          <Paragraph>Size {block.size} at index {block.block_index}</Paragraph>
        </Main>
      )}
    </Layout>
  )
}

export default Detail
