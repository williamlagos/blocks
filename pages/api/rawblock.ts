import type { NextApiRequest, NextApiResponse } from 'next'

type RawBlock = {
  prev_block: string,
  block_index: number,
  size: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RawBlock>
) {
  res.status(200).json({
    prev_block: "abc",
    block_index: 1,
    size: 1
  })
}