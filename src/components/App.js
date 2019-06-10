import React from 'react'
import { range } from 'd3-array'
import { forceSimulation, forceCollide, forceRadial } from 'd3-force'

export class App extends React.Component {
  render() {
    const nodes = [].concat(
      range(80).map(() => ({ type: 'a' })),
      range(160).map(() => ({ type: 'b' }))
    )

    forceSimulation(nodes)
      .force('charge', forceCollide().radius(5))
      .force('r', forceRadial(d => (d.type === 'a' ? 100 : 200)))
      .on('tick', d => console.log(d))

    return (
      <>
        <svg width="960" height="500" viewBox="-480 -250 960 500">
          <circle r="100" stroke="brown" strokeOpacity="0.5" fill="none" />
          <circle r="200" stroke="steelblue" strokeOpacity="0.5" fill="none" />

          <g>
            {nodes.map((d, i) => {
              return (
                <circle
                  key={`${d} ${i}`}
                  cx={d.x}
                  cy={d.y}
                  r={2.5}
                  fill={d.type === 'a' ? 'brown' : 'steelblue'}
                />
              )
            })}
          </g>
        </svg>
      </>
    )
  }
}
