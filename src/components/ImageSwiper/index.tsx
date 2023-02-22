import IconButton from '@components/IconButton'
import {
  cloneElement,
  createRef,
  CSSProperties,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import './index.css'

const ImageSwiper = ({
  children,
  styles,
  width,
  height,
}: {
  children: Array<JSX.Element>
  styles?: CSSProperties
  width: number | string
  height: number | string
}) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [zoomed, setZoomed] = useState<boolean>(false)
  const [imageSource, setImageSource] = useState<string>('')

  useEffect(() => {
    const listeningFunc = (e: any) => {
      setImageIndex(Math.round(e.target.scrollLeft / e.target.offsetWidth))
    }

    const refCurrent = containerRef.current
    if (containerRef && refCurrent) {
      refCurrent.addEventListener('scroll', listeningFunc)
      return () => refCurrent.removeEventListener('scroll', listeningFunc)
    }
  }, [])

  const scrollToIndex = (index: number) => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.clientWidth * index
    }
  }

  const handlePrevImageClick = () => {
    if (imageIndex - 1 > -1) scrollToIndex(imageIndex - 1)
  }

  const handleNextImageClick = () => {
    if (imageIndex + 1 < children.length) scrollToIndex(imageIndex + 1)
  }

  return (
    <div className="image-swiper" style={{ ...styles, width, height }}>
      <div className="slide-container" ref={containerRef}>
        {children.map((child, index) => {
          return cloneElement(child, {
            key: `image-${index}`,
          })
        })}
      </div>
      <div className="left-button-container">
        <IconButton
          styles={{ width: 50, height: 50 }}
          icon="images/icons/left-arrow.png"
          onClick={handlePrevImageClick}
          disabled={imageIndex === 0}
        />
      </div>
      <div className="right-button-container">
        <IconButton
          styles={{ width: 50, height: 50 }}
          icon="images/icons/right-arrow.png"
          onClick={handleNextImageClick}
          disabled={imageIndex === children.length - 1}
        />
      </div>
      <div className="nagivate-buttons-container">
        {children.map((_, childIndex) => (
          <IconButton
            key={`navgivate-button-${childIndex}`}
            onClick={() => scrollToIndex(childIndex)}
            styles={{
              width: 20,
              height: 20,
              ...(childIndex === imageIndex && { opacity: 1 }),
            }}
          />
        ))}
      </div>
      <div className="zoom-in-button-container">
        <IconButton
          onClick={() => {
            const src = children[imageIndex].props.src
            if (src && typeof src === 'string') {
              setImageSource(src)
              setZoomed(true)
            }
          }}
          icon="images/icons/zoom-in.png"
          styles={{
            width: 50,
            height: 50,
          }}
        />
      </div>
      <div
        className="zoomed-container"
        style={{ display: zoomed ? 'flex' : 'none' }}
      >
        <img
          src={imageSource}
          alt="zoomed"
          className="zoomed-image"
          loading="lazy"
        />
        <div
          className="zoom-out-button-container"
          style={{ display: zoomed ? 'block' : 'none' }}
        >
          <IconButton
            icon="images/icons/zoom-out.png"
            styles={{
              width: 50,
              height: 50,
            }}
            onClick={() => setZoomed(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageSwiper
