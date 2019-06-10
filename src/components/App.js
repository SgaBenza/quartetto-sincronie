import React from 'react'

import { range } from 'd3-array'
import { forceSimulation, forceCollide, forceRadial } from 'd3-force'

import { Graph } from '../components/Graph'

const arr = [].concat(range(80).map(() => ({ type: 'a' })), range(160).map(() => ({ type: 'b' })))

const force = forceSimulation(arr)
  .force('charge', forceCollide().radius(5))
  .force('r', forceRadial(d => (d.type === 'a' ? 100 : 200)))

export class App extends React.Component {
  state = { nodes: [] }

  componentDidMount() {
    const { nodes } = this.state
    this.setState({ nodes: nodes })
  }

  render() {
    return (
      <>
        <Graph nodes={arr} force={force} />
      </>
    )
  }
}
