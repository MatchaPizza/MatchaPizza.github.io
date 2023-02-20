import { CSSProperties, Fragment, useEffect, useState } from 'react'
import customKeyboards from '@custom_keyboards/_index.json' // TODO replace with index.json later
import useWindowWidth from '@hooks/useWindowWidth'
import CustomKeyboardDetail, {
  InitCustomKeyboardDetail,
} from '@interfaces/custom_keyboards'
import Card from '@components/Card'
import ImageSwiper from '@components/ImageSwiper'
import ImageSlide from '@components/ImageSlide'

const CustomKeyboardsPage = () => {
  const windowWidth = useWindowWidth()
  const tabletView = windowWidth <= 768
  const [customKeyboardDetailList, setCustomKeyboardDetailList] = useState<
    Array<CustomKeyboardDetail>
  >(
    customKeyboards.map((customKeyboard) => ({
      ...InitCustomKeyboardDetail,
      id: customKeyboard.id,
    })),
  )

  useEffect(() => {
    customKeyboards.forEach(async (customKeyboard) => {
      try {
        const customKeyboardDetail: CustomKeyboardDetail = await import(
          `@custom_keyboards/${customKeyboard.path}`
        )
        setCustomKeyboardDetailList((list) =>
          list.map((element) =>
            element.id === customKeyboardDetail.id && !element.loaded
              ? { ...customKeyboardDetail, loaded: true }
              : element,
          ),
        )
      } catch (err) {
        console.error(`failed to load from ${customKeyboard.path}`)
      }
    })
  }, [])

  const styles: Record<string, Record<string, CSSProperties>> = {
    main: {
      container: {
        flex: 1,
        margin: `${tabletView ? 16 : 64}px ${tabletView ? 16 : 128}px`,
      },
      titleText: {
        fontSize: tabletView ? 32 : 48,
      },
    },
    content: {
      card: {
        padding: 16,
        marginTop: 8,
        marginBottom: 8,
      },
      text: {
        textAlign: 'center',
      },
      container: {
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: windowWidth <= 1400 ? '100%' : '50% 50%',
      },
    },
    customKeyboard: {
      card: {
        marginTop: 8,
        marginBottom: 8,
        padding: 16,
      },
    },
  }

  return (
    <div style={styles.main.container}>
      <h1 style={styles.main.titleText}>Custom Keyboards</h1>
      <Card styles={styles.content.card}>
        <p style={styles.content.text}>
          I love building and typing on custom keyboards
        </p>
      </Card>
      <div style={styles.content.container}>
        {customKeyboardDetailList.map(
          (customKeyboardDetail, customKeyboardIndex) => (
            <Card
              styles={styles.customKeyboard.card}
              key={`custom-keyboard-${customKeyboardIndex}`}
            >
              {customKeyboardDetail.loaded ? (
                <Fragment>
                  {customKeyboardDetail.images && (
                    <ImageSwiper width="100%" height={500}>
                      {customKeyboardDetail.images.map((image, imageIndex) => (
                        <ImageSlide
                          src={`custom_keyboards/images/${image}`}
                          alt={`image-${customKeyboardDetail.id}-${imageIndex}`}
                        />
                      ))}
                    </ImageSwiper>
                  )}
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Card>
          ),
        )}
      </div>
    </div>
  )
}

export default CustomKeyboardsPage
