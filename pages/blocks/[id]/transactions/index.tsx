import axios from "axios"
import Link from "next/link"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Box, DataTable, Text, Heading, Button, Spinner } from "grommet"
import { useQuery, gql } from "@apollo/client"
import Loading from "../../../../components/loading"
import Layout from "../../../../components/layout"
import { TransactionDetail } from "../../../api/blocks/[id]/transactions"

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

  const QUERY = gql`
    query {
      getTransactions(hash: "${id?.toString()}") {
        hash
        tx_index
        block_height
        size
        weight
        time
      }
    }
  `;

  // const [block, setBlock] = useState([]);

  const { data, loading, error } = useQuery(QUERY);

  // useEffect(() => { (async () => setBlock(await fetchBlock(id?.toString())))() }, [id])

  if (loading) {
    return (
      <Layout title="Blocks" description="Fetching API">
        <Loading message="Fetching Transactions..." />
      </Layout>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }
  
  return (
    <Layout title="Transactions" description="Transactions Table View">
      <Box gap="small" direction="row" alignSelf="center">
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
          data={data.getTransactions}
      />
    </Layout>
  )
}

export default Detail
