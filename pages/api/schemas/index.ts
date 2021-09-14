import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type Block {
    hash: String
    height: Int
    time: Int
  }

  type BlockDetail {
    prev_block: String
    next_block: String
    block_index: Int
    size: Int
  }
  
  type Transaction {
    hash: String
    block_index: Int
    block_height: Int
    size: Int
    weight: Int
    time: Int
  }
  
  type Query {
    getBlocks: [Block]
    getBlock(hash: String!): BlockDetail!
    getTransactions(hash: String!): [Transaction]!
  }`