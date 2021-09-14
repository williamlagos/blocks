import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<any>
) {
  await startServer;
  await apolloServer.createHandler({ 
    path: "/api/graphql" 
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false
  }
};