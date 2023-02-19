import { CSSProperties } from 'react'
import './index.css'

const LazyImage = ({
  src,
  alt,
  width,
  height,
  styles,
}: {
  src: string
  alt: string
  width: number | string
  height: number | string
  styles?: CSSProperties
}) => {
  return (
    <img
      className="lazy-image"
      src={src}
      alt={alt}
      style={{ ...styles, width, height }}
      loading="lazy"
    />
  )
}

export default LazyImage