import Link from 'next/link'
import Head from 'next/head'
import type { Block } from '../api/blocks'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Box, DataTable, Text, Meter, Heading, Anchor } from 'grommet'
import axios, { AxiosResponse } from 'axios'

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
      gap="medium"
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
            render: (datum: Block) => (
              <Link passHref href={`/blocks/${datum.hash}`}>
                <Anchor label={`...${datum.hash.toString().substring(35)}`}></Anchor>
              </Link>
            ),
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
          paginate={{
            step: 10,
            alignSelf: "center",
            margin: "small"
          }}
        data={blocks}
      />
    </Box>
  )
}

export default Home
