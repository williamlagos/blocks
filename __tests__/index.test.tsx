// __tests__/index.test.tsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/blocks/index'

/*
TODO: Insert mock structure for testing application
type Blocks = Map<string, BlockDetail> 
const blocks: Blocks = new Map()
blocks.set("g347qho7834ahf834g", { 
  prev_block: "9hf349g1o8703g07g8", 
  next_block: "f9ph347g934o78go47", 
  size: 20, 
  block_index: 1 
})
blocks.set("f9ph347g934o78go47", { 
  prev_block: "f9ph347g934o78go47", 
  next_block: "f3q498g7934h87o34q", 
  size: 30, 
  block_index: 1 
})
blocks.set("f3q498g7934h87o34q", { 
  prev_block: "f3q498g7934h87o34q", 
  next_block: "9hf349g1o8703g07g8", 
  size: 40, 
  block_index: 1 
})
blocks.set("9hf349g1o8703g07g8", { 
  prev_block: "9hf349g1o8703g07g8", 
  next_block: "g347qho7834ahf834g", 
  size: 80, 
  block_index: 1 
})*/
// const block = [ blocks.get(id.toString()) ]
/*const blocks = [
  { hash: "g347qho7834ahf834g", time: 20, height: 1 },
  { hash: "f9ph347g934o78go47", time: 30, height: 1 },
  { hash: "f3q498g7934h87o34q", time: 40, height: 1 },
  { hash: "9hf349g1o8703g07g8", time: 80, height: 1 },
]*/

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})