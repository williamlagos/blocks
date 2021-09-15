import Head from "next/head";
import { Box, Heading } from "grommet";
import { useEffect, useState } from "react";

const Layout = ({ title, description, children, ...delegated} : any) => {
  const [ hasMounted, setHasMounted ] = useState(false);

  useEffect(() => { setHasMounted(true); }, []);

  if (!hasMounted) { return null; }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        flex
        margin={{ horizontal: "auto" }}
        width={{ max: "xlarge" }}
        height={{ min: "100%" }}
        gap="medium"
        pad="medium"
        align="center"
        alignSelf="center"
        alignContent="center"
        {...delegated}
      >
        <Heading alignSelf="center">{title}</Heading>
        {children}
      </Box>
    </>
  );
}

export default Layout