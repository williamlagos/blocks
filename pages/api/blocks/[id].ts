import type { NextApiRequest, NextApiResponse } from 'next'

export type RawBlock = {
  prev_block: string,
  block_index: number,
  size: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<RawBlock>>
) {
  const { query: { id } } = req
  const blocks = [
    { prev_block: "Alan:", size: 20, block_index: 1 },
    { prev_block: "Bryan", size: 30, block_index: 1 },
    { prev_block: "Chris", size: 40, block_index: 1 },
    { prev_block: "Eric", size: 80, block_index: 1 },
  ] 
  res.status(200).json(blocks)
}