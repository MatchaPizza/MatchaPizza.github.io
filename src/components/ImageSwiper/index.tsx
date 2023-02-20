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
      const snappingOffset = e.target.scrollLeft % e.target.offsetWidth

      // scroll-snapped offset at [-1, 1]
      if (snappingOffset >= -1 && snappingOffset >= 1) {
        setImageIndex(Math.round(e.target.scrollLeft / e.target.offsetWidth))
      }
    }

    const refCurrnet = containerRef.current
    if (containerRef && refCurrnet) {
      refCurrnet.addEventListener('scroll', listeningFunc, false)
      return () =>
        refCurrnet.removeEventListener('scroll', listeningFunc, false)
    }
  }, [])

  const handlePrevImageClick = () => {
    setImageIndex((prev) => {
      if (prev - 1 > -1) {
        slideRefs[prev - 1].current?.scrollIntoView()
        return prev - 1
      } else {
        return prev
      }
    })
  }

  const handleNextImageClick = () => {
    setImageIndex((prev) => {
      if (prev + 1 < slideRefs.length) {
        slideRefs[prev + 1].current?.scrollIntoView()
        return prev + 1
      } else {
        return prev
      }
    })
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
              setImageIndex(() => {
                slideRefs[index].current?.scrollIntoView()
                return index
              })
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
