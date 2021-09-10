import axios from 'axios'
import { Box, DataTable, Text, Meter, Heading } from 'grommet'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { RawBlock } from './api/rawblock'

const fetchBlock = async () => {
  let res = { data: [] }
  try {
    res = await axios.get("/api/rawblock")
  } catch (e) {
    console.error(e)
  } finally {
    return res.data
  }
}

const Detail: NextPage = () => {

  const [block, setBlock] = useState([])

  useEffect(() => { (async () => setBlock(await fetchBlock()))() }, [])
  
  return (
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
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
    </Box>
  )
}

export default Detail
