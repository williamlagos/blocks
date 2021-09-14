import axios from "axios";

const apiUrl = "https://blockchain.info"

export const resolvers = {
  Query: {
    getBlocks: async () => {
      try {
        const timestamp = Date.now();
        const external = `${apiUrl}/blocks/${timestamp}?format=json`;
        const res = await axios.get(external);
        return res.data.map(({ hash, height, time }) => ({ hash, height, time }));
      } catch (error) {
        throw error;
      }
      
    },
    getBlock: async (hash: string) => {
      try {
        const external = `${apiUrl}/rawblock/${hash}`;
        const res = await axios.get(external);
        const { tx, ...block } = res.data;      
        return { 
          prev_block: block.prev_block, 
          next_block: block.next_block, 
          block_index: block.block_index, 
          size: block.size 
        };
      } catch (error) {
        throw error;
      }
    },
    getTransactions: async (hash: string) => {
      try {
        const external = `${apiUrl}/rawblock/${hash}`;
        const response = await axios.get(external);
        const { tx, ...block } = response.data;
        return {
          hash: tx.hash,
          size: tx.size,
          weight: tx.weight,
          index: tx.tx_index,
          time: tx.time
        }
      } catch (error) {
        throw error;
      }
    }
  }
};