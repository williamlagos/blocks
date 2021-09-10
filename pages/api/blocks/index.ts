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
    { hash: "g43qpuh34r7y34qogh", time: 30, height: 1 },
    { hash: "32v5p972387f3g7238", time: 40, height: 1 },
    { hash: "p2938t7q43gt78q43h", time: 80, height: 1 },
  ] 
  res.status(200).json(blocks)
}
