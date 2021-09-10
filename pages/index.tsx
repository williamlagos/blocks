import { Box, DataTable, Text, Meter, Heading } from 'grommet'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const blocks = [
    { name: 'Alan', percent: 20 },
    { name: 'Bryan', percent: 30 },
    { name: 'Chris', percent: 40 },
    { name: 'Eric', percent: 80 },
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
            property: 'name',
            header: <Text>Hash</Text>,
            primary: true,
          },
          {
            property: 'percent',
            header: 'Complete',
            render: datum => (
              <Box pad={{ vertical: 'xsmall' }}>
                <Meter
                  values={[{ value: datum.percent }]}
                  thickness="small"
                  size="small"
                />
              </Box>
            ),
          },
          ]}
          data={blocks}
      >

      </DataTable>
    </Box>
  )
}

export default Home
