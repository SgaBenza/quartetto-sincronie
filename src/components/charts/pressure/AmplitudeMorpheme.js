import React from 'react'

import { CX, CY } from '../../../constants/chartConstants'

export function AmplitudeMorpheme() {
  return (
    <g>
      <path
        d="M 0,0 h 6 l -2,70 h -2 z"
        transform={`translate(${CX - 3} ${CY - 70})`}
        strokeWidth={0.1}
        fill="purple"
      />
      <circle cx={CX} cy={CY} r={1} fill="purple" />
      <circle cx={CX} cy={CY - 70} r={3} fill="purple" />
    </g>
  )
}
