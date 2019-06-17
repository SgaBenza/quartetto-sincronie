import { scaleLinear } from 'd3-scale'

export const pressureByMinutes = scaleLinear()
  .domain([0, 10])
  .range([0, Math.PI * 2])
