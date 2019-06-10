import React from 'react'

export class Graph extends React.Component {
  componentDidMount() {
    const { force } = this.props

    force.on('tick', () => this.forceUpdate())
  }

  render() {
    const { nodes } = this.props
    return (
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
    )
  }
}
