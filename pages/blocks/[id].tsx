import Link from 'next/link'
import Head from 'next/head'
import type { BlockDetail } from '../api/blocks/[id]'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, DataTable, Text, Anchor, Heading, Button } from 'grommet'
import axios from 'axios'

const fetchBlock = async (id: string = "") => {
  let res = { data: [] }
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

  const [block, setBlock] = useState([])

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
      <DataTable
        columns={[
          {
            property: "prev_block",
            header: <Text>Previous Block</Text>,
            render: (datum: BlockDetail) => (
              <Link passHref href={`/blocks/${datum.prev_block}`}>
                <Anchor label={datum.prev_block}></Anchor>
              </Link>
            ),
            primary: true,
          },
          {
            property: "next_block",
            header: <Text>Next Block</Text>,
            render: (datum: BlockDetail) => (
              <Link passHref href={`/blocks/${datum.next_block}`}>
                <Anchor label={datum.next_block}></Anchor>
              </Link>
            ),
            primary: true,
          },
          {
            property: "size",
            header: <Text>Size</Text>,
          },
          {
            property: "block_index",
            header: <Text>Block Index</Text>
          }
          ]}
          data={block}
      />
      <Link passHref href="/blocks/">
        <Button 
          primary 
          alignSelf="start"
          label="Back to Blocks"
        />
      </Link>
    </Box>
  )
}

export default Detail
