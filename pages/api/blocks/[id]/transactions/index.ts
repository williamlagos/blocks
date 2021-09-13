import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export type TransactionDetail = {
  hash: string,
  relayed_by: string,
  block_index: number,
  block_height: number,
  size: number,
  ver: number,
  vin_sz: number,
  weight: number,
  fee: number,
  lock_time: number,
  tx_index: number,
  double_spend: boolean,
  inputs: Array<any>,
  out: Array<any>
} 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TransactionDetail | undefined>>
) {
  const { query: { id } } = req
  const external = `https://blockchain.info/rawblock/${id}`
  const response = await axios.get(external)
  const { tx, ...block } = response.data
  res.status(200).json(tx)
}