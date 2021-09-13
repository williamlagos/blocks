import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Box, Image, Button } from 'grommet'
import Layout from '../components/layout'

const Home: NextPage = () => (
  <Layout title="Blocks" description="Block Main View">
      <Image
        fit="contain"
        src="/blockchain.svg" 
        alt="Blockchain Vector"
      />
      <Link passHref href="/blocks">
        <Button 
          primary 
          alignSelf="center"
          label="Access Blocks List"
        />
      </Link>
  </Layout>
)

export default Home
