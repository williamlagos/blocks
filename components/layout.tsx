import Head from "next/head";
import { Box, Heading } from "grommet";

const Layout = (props: { title: string, description: string, children: React.ReactNode }) => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
      gap="medium"
      pad="medium"
    >
      <Heading alignSelf="center">{props.title}</Heading>
      {props.children}
    </Box>
  </>
)

export default Layout