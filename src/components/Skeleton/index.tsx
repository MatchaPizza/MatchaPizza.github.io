import { CSSProperties } from 'react'
import './index.css'

const Skeleton = ({
  height,
  width,
  styles,
}: {
  height: number | string
  width: number | string
  styles?: CSSProperties
}) => {
  return <div className="skeleton" style={{ ...styles, height, width }} />
}

export default Skeleton
