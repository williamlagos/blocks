import type { NextApiRequest, NextApiResponse } from 'next'

export type BlockDetail = {
  prev_block: string,
  next_block: string,
  block_index: number,
  size: number
} 

type Blocks = Map<string, BlockDetail> 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlockDetail | undefined>>
) {
  const { query: { id } } = req
  const blocks: Blocks = new Map()
  blocks.set("g347qho7834ahf834g", { 
    prev_block: "9hf349g1o8703g07g8", 
    next_block: "f9ph347g934o78go47", 
    size: 20, 
    block_index: 1 
  })
  blocks.set("f9ph347g934o78go47", { 
    prev_block: "f9ph347g934o78go47", 
    next_block: "f3q498g7934h87o34q", 
    size: 30, 
    block_index: 1 
  })
  blocks.set("f3q498g7934h87o34q", { 
    prev_block: "f3q498g7934h87o34q", 
    next_block: "9hf349g1o8703g07g8", 
    size: 40, 
    block_index: 1 
  })
  blocks.set("9hf349g1o8703g07g8", { 
    prev_block: "9hf349g1o8703g07g8", 
    next_block: "g347qho7834ahf834g", 
    size: 80, 
    block_index: 1 
  })
  res.status(200).json([ blocks.get(id.toString()) ])
}