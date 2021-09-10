import type { NextApiRequest, NextApiResponse } from 'next'

export type BlockDetail = {
  prev_block: string,
  next_block: string,
  block_index: number,
  size: number
} 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlockDetail>>
) {
  const { query: { id } } = req
  const blocks = {
    "g347qho7834ahf834g": { 
      prev_block: "9hf349g1o8703g07g8", 
      next_block: "f9ph347g934o78go47", 
      size: 20, 
      block_index: 1 
    },
    "f9ph347g934o78go47": { 
      prev_block: "f9ph347g934o78go47", 
      next_block: "f3q498g7934h87o34q", 
      size: 30, 
      block_index: 1 
    },
    "f3q498g7934h87o34q": { 
      prev_block: "f3q498g7934h87o34q", 
      next_block: "9hf349g1o8703g07g8", 
      size: 40, 
      block_index: 1 
    },
    "9hf349g1o8703g07g8": { 
      prev_block: "9hf349g1o8703g07g8", 
      next_block: "g347qho7834ahf834g", 
      size: 80, 
      block_index: 1 
    },
  }  
  res.status(200).json([blocks[id.toString()]])
}