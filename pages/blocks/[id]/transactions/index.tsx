import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, DataTable, Text, Heading, Button, Pagination } from 'grommet'
import axios from 'axios'

const fetchBlock = async (id: string = "") => {
  let res = { data: [] }
  try {
    res = await axios.get(`/api/blocks/${id}/transactions`)
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
        <title>Transaction Detail</title>
        <meta name="description" content="Transaction Detail View" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Transaction Detail</Heading>
      <Box gap="small" direction="row">
        <Link passHref href={`/blocks/${id}`}>
          <Button 
            primary 
            alignSelf="start"
            label="Back to Block"
          />
        </Link>
      </Box>
      <DataTable
        columns={[
          {
            property: "hash",
            header: <Text>Hash</Text>,
            render: (datum: any) => (
              <Text>{`...${datum.hash.toString().substring(35)}`}</Text>
            ),
            primary: true
          },
          {
            property: "size",
            header: <Text>Size</Text>,
          },
          {
            property: "weight",
            header: <Text>Weight</Text>
          },
          {
            property: "tx_index",
            header: <Text>Index</Text>
          },
          {
            property: "time",
            header: <Text>Time</Text>
          }
          ]}
          paginate={{
            step: 10,
            alignSelf: "center",
            margin: "small"
          }}
          data={block}
      />
    </Box>
  )
}

export default Detail
