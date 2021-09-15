import { Box, Spinner, Heading } from "grommet"

const Loading = ({ message }: any) => (
  <Box align="center">
    <Spinner />
    <Heading level={2}>{message}</Heading>
  </Box>
);

export default Loading;