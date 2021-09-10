import type { NextApiRequest, NextApiResponse } from 'next'

type Block = {
  hash: string,
  height: number,
  time: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Block>
) {
  res.status(200).json({
    hash: "abc",
    height: 1,
    time: 1
  })
}
