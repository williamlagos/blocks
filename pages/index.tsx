import { Box, DataTable, Text, Meter, Heading } from 'grommet'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const blocks = [
    { hash: "Alan", time: 20, height: 1 },
    { hash: "Bryan", time: 30, height: 1 },
    { hash: "Chris", time: 40, height: 1 },
    { hash: "Eric", time: 80, height: 1 },
  ] 
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
            header: "Time",
            render: datum => (
              <Box pad={{ vertical: "xsmall" }}>
                <Meter
                  values={[{ value: datum.time }]}
                  thickness="small"
                  size="small"
                />
              </Box>
            ),
          },
          {
            property: "height",
            header: <Text>Height</Text>
          }
          ]}
          data={blocks}
      >

      </DataTable>
    </Box>
  )
}

export default Home
