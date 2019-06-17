import React from 'react'
import { HEIGHT, WIDTH } from '../../constants/chartConstants'

import { SoundPressure } from './SoundPressure'

export function Chart() {
  return (
    <svg>
      <SoundPressure />
    </svg>
  )
}
