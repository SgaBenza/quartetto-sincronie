import React from 'react'
import { range } from 'lodash'

import {
  CX,
  CY,
  PRESSURE_INNER_RADIUS,
  PRESSURE_RADIUS,
  PRESSURE_OFFSET,
  SECONDS,
} from '../../constants/chartConstants'

export function SoundPressure() {
  return (
    <>
      <circle cx={CX} cy={CY} r={PRESSURE_INNER_RADIUS} stroke={'green'} fill={'red'} />
      {range(SECONDS).map((d, i) => (
        <line
          key={d + i}
          x1={CX}
          y1={CY}
          x2={CX}
          y2={CY - PRESSURE_RADIUS}
          stroke="gray"
          strokeDasharray="1 3"
          transform={`rotate(${((360 - PRESSURE_OFFSET * 2) / SECONDS) * (d + 1) +
            PRESSURE_OFFSET} ${CX} ${CY}) translate(0 -${PRESSURE_INNER_RADIUS})`}
        />
      ))}
    </>
  )
}
