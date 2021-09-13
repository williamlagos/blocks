import Link from 'next/link'
import Head from 'next/head'
import type { BlockDetail } from '../api/blocks/[id]'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Main, Anchor, Heading, Button, Paragraph } from 'grommet'
import axios from 'axios'

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
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
      gap="medium"
    >
      <Head>
        <title>Block Detail</title>
        <meta name="description" content="Block Table View" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Block Detail</Heading>
      <Box gap="small" direction="row">
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
        <Main>
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
    </Box>
  )
}

export default Detail
