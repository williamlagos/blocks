import axios, { AxiosResponse } from 'axios'
import { Box, DataTable, Text, Meter, Heading } from 'grommet'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Block } from './api/blocks'

const fetchBlocks = async () => {
  let res = { data: [] }
  try {
    res = await axios.get("/api/blocks")
  } catch (e) {
    console.error(e)
  } finally {
    return res.data
  }
}

const Home: NextPage = () => {

  const [blocks, setBlocks] = useState([])

  useEffect(() => { (async () => setBlocks(await fetchBlocks()))() }, [])

  return (
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
    >
      <Head>
        <title>Blocks</title>
        <meta name="description" content="Block Table View" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Blocks</Heading>
      <DataTable
        columns={[
          {
            property: "hash",
            header: <Text>Hash</Text>,
            primary: true,
          },
          {
            property: "time",
            header: <Text>Time</Text>,
          },
          {
            property: "height",
            header: <Text>Height</Text>
          }
          ]}
          data={blocks}
      />
    </Box>
  )
}

export default Home
