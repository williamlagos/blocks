import { Box, DataTable, Text, Meter, Heading } from 'grommet'
import type { NextPage } from 'next'
import Head from 'next/head'

const Detail: NextPage = () => {
  const blocks = [
    { prev_block: "Alan", size: 20, block_index: 1 },
    { prev_block: "Bryan", size: 30, block_index: 1 },
    { prev_block: "Chris", size: 40, block_index: 1 },
    { prev_block: "Eric", size: 80, block_index: 1 },
  ] 
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
            header: "Size",
            render: datum => (
              <Box pad={{ vertical: "xsmall" }}>
                <Meter
                  values={[{ value: datum.size }]}
                  thickness="small"
                  size="small"
                />
              </Box>
            ),
          },
          {
            property: "block_index",
            header: <Text>Block Index</Text>
          }
          ]}
          data={blocks}
      >

      </DataTable>
    </Box>
  )
}

export default Detail
