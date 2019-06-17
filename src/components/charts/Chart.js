import React from 'react'
import { HEIGHT, WIDTH } from '../../constants/chartConstants'

import { SoundPressure } from './pressure/SoundPressure'

export function Chart() {
  return (
    <svg viewBox={`0 0 ${HEIGHT} ${WIDTH}`} height={HEIGHT} width={WIDTH}>
      <SoundPressure />
    </svg>
  )
}
