import { CSSProperties, RefObject } from 'react'
import './index.css'

const ImageSlide = ({
  src,
  alt,
  loading = 'lazy',
  styles,
  imageRef,
}: {
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  styles?: CSSProperties
  imageRef?: RefObject<HTMLImageElement>
}) => {
  return (
    <img
      className="image-slide"
      src={src}
      alt={alt}
      loading={loading}
      style={{
        minWidth: '100%',
        ...styles,
      }}
      ref={imageRef}
    />
  )
}

export default ImageSlide
