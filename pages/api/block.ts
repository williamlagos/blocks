import type { NextApiRequest, NextApiResponse } from 'next'

type Block = {
  hash: string,
  time: number,
  height: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Block>
) {
  res.status(200).json({
    hash: "abc",
    time: 1,
    height: 1
  })
}
