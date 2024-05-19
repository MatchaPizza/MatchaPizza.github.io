import { useEffect, useRef } from 'react'
import './index.css'
import BlurHash from '@libs/blurhash'

const LazyImage = ({
  src,
  hash,
  originalWidth,
  originalHeight,
  alt,
  width,
  height,
}: {
  src: string
  hash: string
  originalWidth?: number
  originalHeight?: number
  alt: string
  width: number | string
  height: number | string
}) => {
  const imageRef = useRef<HTMLImageElement>(null)
  originalWidth = originalWidth ?? 400
  originalHeight = originalHeight ?? 300

  useEffect(() => {
    if (imageRef.current) {
      // BlurHash
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imageRef.current!.dataset.lazyLoaded) {
            BlurHash.decode(  
              imageRef.current!.dataset.hash,
              originalWidth,
              originalHeight,
            )
              .then((pixels: ArrayLike<number>) => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                const imageData = ctx!.createImageData(
                  originalWidth!,
                  originalHeight!,
                )
                imageData.data.set(pixels)
                ctx!.putImageData(imageData, 0, 0)
                const dataURL = canvas.toDataURL()
                if (!imageRef.current!.dataset.lazyLoaded) {
                  imageRef.current!.src = dataURL
                }
              })
              .catch((err) => {
                console.error('fail to load blurhash:', err)
              })
            observer.unobserve(entry.target)
          }
        })
      })
      observer.observe(imageRef.current)
    }
  }, [originalWidth, originalHeight])

  useEffect(() => {
    if (imageRef.current) {
      // lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageRef.current!.src = imageRef.current!.dataset.image!
            imageRef.current!.dataset.lazyLoaded = 'true'
            observer.unobserve(entry.target)
          }
        })
      })
      observer.observe(imageRef.current)
    }
  }, [])

  return (
    <img
      className="lazy-image"
      data-image={src}
      data-hash={hash}
      data-original-width={originalWidth}
      data-original-height={originalHeight}
      ref={imageRef}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjOHPmzH8ACDADZKt3GNsAAAAASUVORK5CYII="
      alt={alt}
      style={{ width, height }}
    />
  )
}

export default LazyImage
