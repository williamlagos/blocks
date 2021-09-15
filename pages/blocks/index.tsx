import axios from "axios"
import Link from "next/link"
import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { DataTable, Text, Anchor, Heading, Spinner, Box } from "grommet"
import { useQuery, gql } from "@apollo/client"
import Loading from "../../components/loading"
import Layout from "../../components/layout"
import type { Block } from "../api/blocks"

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

  const QUERY = gql`
    query {
      getBlocks {
        hash
        height
        time
      }
    }
  `;

  // const [blocks, setBlocks] = useState([]);

  const { data, loading, error } = useQuery(QUERY);

  // useEffect(() => { (async () => setBlocks(await fetchBlocks()))() }, [])

  if (loading) {
    return (
      <Layout title="Blocks" description="Fetching API">
        <Loading message="Fetching Blocks..." />
      </Layout>
    )
  }

  if (error) {
    console.error(error);
    return null;
  }

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
        data={data.getBlocks}
      />
    </Layout>
  )
}

export default Home
