import Link from 'next/link'
import Head from 'next/head'
import type { Block } from '../api/blocks'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Box, DataTable, Text, Meter, Heading, Anchor } from 'grommet'
import axios, { AxiosResponse } from 'axios'
import Layout from '../../components/layout'

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
    <Layout title="Blocks" description="Block Table View">
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
    </Layout>
  )
}

export default Home
