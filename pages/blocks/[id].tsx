import axios from "axios"
import Link from "next/link"
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Main, Anchor, Heading, Button, Spinner, Paragraph } from 'grommet'
import { useQuery, gql } from "@apollo/client"
import Loading from "../../components/loading"
import Layout from "../../components/layout"
import type { BlockDetail } from "../api/blocks/[id]"


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

  const QUERY = gql`
    query {
      getBlock(hash: "${id?.toString()}") {
        prev_block
        next_block
        block_index
        size
      }
    }
  `;

  // const [block, setBlock] = useState<BlockDetail | null>(null)

  const { data, loading, error } = useQuery(QUERY);

  // useEffect(() => { (async () => setBlock(await fetchBlock(id?.toString())))() }, [id])

  if (loading) {
    return (
      <Layout title="Blocks" description="Fetching API">
        <Loading message="Fetching Block Details..." />
      </Layout>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Layout title="Block Detail" description="Block Detail View">
      <Box gap="small" direction="row" >
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
      {data.getBlock !== null && (
        <Main align="center">
          <Heading>...{id?.toString().substring(35)}</Heading>
          
          <Link passHref href={`/blocks/${data.getBlock.prev_block}`}>
            <Anchor label={`${data.getBlock.prev_block.toString()}`}></Anchor>
          </Link>
          <Link passHref href={`/blocks/${data.getBlock.next_block}`}>
            <Anchor label={`${data.getBlock.next_block.toString()}`}></Anchor>
          </Link>
          <Paragraph>Size {data.getBlock.size} at index {data.getBlock.block_index}</Paragraph>
        </Main>
      )}
    </Layout>
  )
}

export default Detail
