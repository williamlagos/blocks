import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type Block {
    hash: String
    height: Int
    time: Int
  }
  
  type Transaction {
    hash: String
    block_index: Int
    block_height: Int
  }
  
  type Query {
    getBlocks: [Block]
    getBlock(hash: String!): Block!
    getTransaction(hash: String!): Transaction!
  }`