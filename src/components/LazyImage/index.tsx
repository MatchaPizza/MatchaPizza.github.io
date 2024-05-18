import './index.css'

const LazyImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number | string
  height: number | string
}) => {
  return (
    <img
      className="lazy-image"
      src={src}
      alt={alt}
      style={{ width, height }}
      loading="lazy"
    />
  )
}

export default LazyImage
