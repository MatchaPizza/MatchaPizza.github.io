import { CSSProperties, Fragment, useEffect, useState } from 'react'
import customKeyboards from '@custom_keyboards/_index.json' // TODO replace with index.json later
import useWindowWidth from '@hooks/useWindowWidth'
import CustomKeyboardDetail, {
  InitCustomKeyboardDetail,
} from '@interfaces/custom_keyboards'
import Card from '@components/Card'
import ImageSwiper from '@components/ImageSwiper'
import ImageSlide from '@components/ImageSlide'
import Chip from '@components/Chip'
import Skeleton from '@components/Skeleton'
import Tooltip from '@components/Tooltip'
import IconButton from '@components/IconButton'

const CustomKeyboardsPage = () => {
  const windowWidth = useWindowWidth()
  const tabletView = windowWidth <= 768
  const [customKeyboardDetailList, setCustomKeyboardDetailList] = useState<
    Array<CustomKeyboardDetail>
  >(
    customKeyboards
      .map((customKeyboard) => ({
        ...InitCustomKeyboardDetail,
        id: customKeyboard.id,
      }))
      .sort((prev, cur) => (prev > cur ? -1 : 1)),
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

  let chipIndex = 0

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
        margin: '8px 0px',
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
        margin: '8px 0px',
        padding: 16,
      },
      cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: '8px 0px',
      },
      chipGroupContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        fontSize: 10,
      },
      chipContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
      },
      chipTitle: {
        fontWeight: 'bold',
      },
      description: {
        margin: '8px 0px',
      },
      notFulfilled: {
        fontStyle: 'italic',
        fontSize: 24,
        margin: '8px 0px',
        color: '#e841bd',
      },
      buttonContainer: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8,
      },
      iconButton: {
        height: 32,
        width: 32,
      },
    },
  }

  return (
    <div style={styles.main.container}>
      <h1 style={styles.main.titleText}>Custom Keyboards</h1>
      <Card styles={styles.content.card}>
        <p style={styles.content.text}>
          I love building and typing on custom keyboards. I probably can't come
          back to type on a membrane keyboard again 😭
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
                  {customKeyboardDetail.fulfilled &&
                    customKeyboardDetail.images &&
                    customKeyboardDetail.images.length && (
                      <ImageSwiper width="100%" height={500}>
                        {customKeyboardDetail.images.map(
                          (image, imageIndex) => (
                            <ImageSlide
                              src={`custom_keyboards/images/${image}`}
                              alt={`image-${customKeyboardDetail.id}-${imageIndex}`}
                            />
                          ),
                        )}
                      </ImageSwiper>
                    )}
                  <h2 style={styles.customKeyboard.cardTitle}>
                    {customKeyboardDetail.title}
                  </h2>
                  {!customKeyboardDetail.fulfilled && (
                    <p style={styles.customKeyboard.notFulfilled}>
                      Custom keyboard in shipment state or group buy status is
                      not fulfilled yet ...
                    </p>
                  )}
                  <div style={styles.customKeyboard.chipGroupContainer}>
                    {customKeyboardDetail.pcbs &&
                      customKeyboardDetail.pcbs.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>PCB</p>
                          {customKeyboardDetail.pcbs.map((pcb, pcbIndex) => (
                            <Chip index={chipIndex++} key={`pcb-${pcbIndex}`}>
                              {pcb}
                            </Chip>
                          ))}
                        </div>
                      )}
                    {customKeyboardDetail.plates &&
                      customKeyboardDetail.plates.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>Plate</p>
                          {customKeyboardDetail.plates.map(
                            (plate, plateIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`plate-${plateIndex}`}
                              >
                                {plate}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.caseColors &&
                      customKeyboardDetail.caseColors.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>
                            Case Color
                          </p>
                          {customKeyboardDetail.caseColors.map(
                            (caseColor, caseColorIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`case-color-${caseColorIndex}`}
                              >
                                {caseColor}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.caseMaterials &&
                      customKeyboardDetail.caseMaterials.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>
                            Case Material
                          </p>
                          {customKeyboardDetail.caseMaterials.map(
                            (caseMaterial, caseMaterialIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`case-material-${caseMaterialIndex}`}
                              >
                                {caseMaterial}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.keycaps &&
                      customKeyboardDetail.keycaps.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>Keycap</p>
                          {customKeyboardDetail.keycaps.map(
                            (keycap, keycapIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`keycap-${keycapIndex}`}
                              >
                                {keycap}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.switches &&
                      customKeyboardDetail.switches.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>Switch</p>
                          {customKeyboardDetail.switches.map(
                            (keySwitch, keySwitchIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`switch-${keySwitchIndex}`}
                              >
                                {keySwitch}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.stabilizers &&
                      customKeyboardDetail.stabilizers.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>
                            Stabilizer
                          </p>
                          {customKeyboardDetail.stabilizers.map(
                            (stabilizer, stabilizerIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`stabilizer-${stabilizerIndex}`}
                              >
                                {stabilizer}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.foams &&
                      customKeyboardDetail.foams.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>Foam</p>
                          {customKeyboardDetail.foams.map((foam, foamIndex) => (
                            <Chip index={chipIndex++} key={`foam-${foamIndex}`}>
                              {foam}
                            </Chip>
                          ))}
                        </div>
                      )}
                    {customKeyboardDetail.mountings &&
                      customKeyboardDetail.mountings.length && (
                        <div style={styles.customKeyboard.chipContainer}>
                          <p style={styles.customKeyboard.chipTitle}>
                            Mounting
                          </p>
                          {customKeyboardDetail.mountings.map(
                            (mounting, mountingIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`mounting-${mountingIndex}`}
                              >
                                {mounting}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                  </div>
                  <p style={styles.customKeyboard.description}>
                    {customKeyboardDetail.description}
                  </p>
                  <div style={styles.customKeyboard.buttonContainer}>
                    {customKeyboardDetail.website && (
                      <Tooltip message="Link">
                        <IconButton
                          styles={styles.customKeyboard.iconButton}
                          icon="/images/icons/link.png"
                          onClick={() =>
                            window.open(customKeyboardDetail.website)
                          }
                        />
                      </Tooltip>
                    )}
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <Skeleton height={500} width="100%" />
                  <Skeleton
                    height={28}
                    width="100%"
                    styles={{ margin: '8px 0px' }}
                  />
                  <Skeleton
                    height={28}
                    width="100%"
                    styles={{ borderRadius: '50px' }}
                  />
                  <Skeleton
                    height={28}
                    width="100%"
                    styles={{ margin: '8px 0px 0px', borderRadius: '50px' }}
                  />
                  <Skeleton
                    height={56}
                    width="100%"
                    styles={{ margin: '8px 0px' }}
                  />
                  <div style={styles.customKeyboard.buttonContainer}>
                    <Skeleton
                      width={32}
                      height={32}
                      styles={{ borderRadius: '100%' }}
                    />
                  </div>
                </Fragment>
              )}
            </Card>
          ),
        )}
      </div>
    </div>
  )
}

export default CustomKeyboardsPage
