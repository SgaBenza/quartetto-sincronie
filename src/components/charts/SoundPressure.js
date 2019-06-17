import React from 'react'

import { CX, CY, PRESSURE_INNER_RADIUS } from '../../constants/chartConstants'

export function SoundPressure() {
  return <circle cx={CX} cy={CY} r={PRESSURE_INNER_RADIUS} stroke={'green'} fill={'red'} />
}
