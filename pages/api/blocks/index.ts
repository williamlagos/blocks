import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export type Block = {
  hash: string,
  height: number,
  time: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Block>>
) {
  const timestamp = Date.now()
  const external = `https://blockchain.info/blocks/${timestamp}?format=json`
  const response = await axios.get(external)
  const blocks = response.data
  res.status(200).json(blocks)
}
