import type { NextApiRequest, NextApiResponse } from 'next'

export type Block = {
  hash: string,
  height: number,
  time: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Block>>
) {
  const blocks = [
    { hash: "g347qho7834ahf834g", time: 20, height: 1 },
    { hash: "f9ph347g934o78go47", time: 30, height: 1 },
    { hash: "f3q498g7934h87o34q", time: 40, height: 1 },
    { hash: "9hf349g1o8703g07g8", time: 80, height: 1 },
  ] 
  res.status(200).json(blocks)
}
