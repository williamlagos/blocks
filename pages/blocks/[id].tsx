import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, DataTable, Text, Meter, Heading, Button } from 'grommet'
import axios from 'axios'

const fetchBlock = async (id: string = "") => {
  let res = { data: [] }
  console.log(id)
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

  useEffect(() => { (async () => setBlock(await fetchBlock(id?.toString())))() }, [])
  
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
