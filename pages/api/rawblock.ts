import type { NextApiRequest, NextApiResponse } from 'next'

type RawBlock = {
  size: number,
  block_index: number,
  prev_block: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RawBlock>
) {
  res.status(200).json({
    size: 1,
    block_index: 1,
    prev_block: "abc"
  })
}