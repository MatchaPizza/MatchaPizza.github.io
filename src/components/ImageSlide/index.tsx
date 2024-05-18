import { RefObject } from 'react'
import './index.css'

const ImageSlide = ({
  src,
  alt,
  loading = 'lazy',
  imageRef,
}: {
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
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
      }}
      ref={imageRef}
    />
  )
}

export default ImageSlide
