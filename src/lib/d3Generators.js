import { arc, pie } from 'd3-shape'

export const arcGen = () =>
  arc()
    .innerRadius(0)
    .outerRadius(100)

export const pieGenerator = () => pie().sort(null)
