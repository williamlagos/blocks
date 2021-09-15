import axios from "axios";
import { Block } from "../blocks";
import { TransactionDetail } from "../blocks/[id]/transactions";

const apiUrl = "https://blockchain.info"

export const resolvers = {
  Query: {
    getBlocks: async () => {
      try {
        const timestamp = Date.now();
        const external = `${apiUrl}/blocks/${timestamp}?format=json`;
        const res = await axios.get(external);
        return res.data.map(({ hash, height, time }: Block) => ({ hash, height, time }));
      } catch (error) {
        throw error;
      }
      
    },
    getBlock: async (_: any, { hash } : any) => {
      try {
        const external = `${apiUrl}/rawblock/${hash}`;
        const res = await axios.get(external);
        const { tx, ...block } = res.data;      
        return { 
          prev_block: block.prev_block, 
          next_block: block.next_block[0] === null ? block.next_block[0] : "", 
          block_index: block.block_index, 
          size: block.size 
        };
      } catch (error) {
        throw error;
      }
    },
    getTransactions: async (_: any, { hash } : any) => {
      try {
        const external = `${apiUrl}/rawblock/${hash}`;
        const response = await axios.get(external);
        const { tx, ...block } = response.data;
        return tx.map((txd: TransactionDetail) => (
          { 
            hash: txd.hash,
            size: txd.size,
            weight: txd.weight,
            block_height: txd.block_height,
            tx_index: txd.tx_index,
            time: txd.lock_time
          }
        ))
      } catch (error) {
        throw error;
      }
    }
  }
};