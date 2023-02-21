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
  const [slideRefs] = useState<Array<RefObject<HTMLImageElement>>>(
    children.map(() => createRef<HTMLImageElement>()),
  )
  const [imageIndex, setImageIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

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
    if (imageIndex + 1 < slideRefs.length) scrollToIndex(imageIndex + 1)
  }

  return (
    <div className="image-swiper" style={{ ...styles, width, height }}>
      <div className="slide-container" ref={containerRef}>
        {children.map((child, index) => {
          return cloneElement(child, {
            imageRef: slideRefs[index],
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
          disabled={imageIndex === slideRefs.length - 1}
        />
      </div>
      <div className="nagivate-buttons-container">
        {slideRefs.map((_ref, index) => (
          <IconButton
            key={`navgivate-button-${index}`}
            onClick={() =>
              // setImageIndex(() => {
              //   // slideRefs[index].current?.scrollIntoView()
              //   scrollToIndex(index)
              //   return index
              // })
              scrollToIndex(index)
            }
            styles={{
              width: 20,
              height: 20,
              ...(index === imageIndex && { opacity: 1 }),
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSwiper
