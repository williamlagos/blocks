import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export type BlockDetail = {
  prev_block: string,
  next_block: string,
  block_index: number,
  size: number
} 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlockDetail | undefined>>
) {
  const { query: { id } } = req
  const external = `https://blockchain.info/rawblock/${id}`
  const response = await axios.get(external)
  const { tx, ...block } = response.data
  res.status(200).json(tx)
}