import { Fragment, useEffect, useState } from 'react'
import customKeyboards from '@custom-keyboards/index.json'
import CustomKeyboardDetail, {
  InitCustomKeyboardDetail,
} from '@interfaces/custom-keyboards'
import Card from '@components/Card'
import ImageSwiper from '@components/ImageSwiper'
import Chip from '@components/Chip'
import Skeleton from '@components/Skeleton'
import IconButton from '@components/IconButton'
import KeyboardCard from './KeyboardCard'
import './index.css'
import LazyImage from '@components/LazyImage'

const CustomKeyboardsPage = () => {
  const [customKeyboardDetailList, setCustomKeyboardDetailList] = useState<
    Array<CustomKeyboardDetail>
  >(
    customKeyboards
      .map((customKeyboard) => ({
        ...InitCustomKeyboardDetail,
        id: customKeyboard.id,
      }))
      .sort((prev, cur) => (prev.id > cur.id ? -1 : 1)),
  )

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      entries.forEach(async (entry) => {
        if (!entry.isIntersecting) return

        const keyboardAttribute = entry.target.getAttribute('data-keyboard-id')
        if (keyboardAttribute === null) return

        const keyboardId = parseInt(keyboardAttribute)
        const keyboardPath = customKeyboards.find(
          (customKeyboard) => customKeyboard.id === keyboardId,
        )?.path
        if (keyboardPath === undefined) return
        const customKeyboardDetail: CustomKeyboardDetail = await import(
          `@custom-keyboards/${keyboardPath}`
        )
        setCustomKeyboardDetailList((list) =>
          list.map((element) =>
            element.id === customKeyboardDetail.id && !element.loaded
              ? { ...customKeyboardDetail, loaded: true }
              : element,
          ),
        )

        observer.unobserve(entry.target)
      })
    })

    const cards = document.getElementsByClassName('keyboard-card')
    for (let i = 0; i < cards.length; i++) {
      observer.observe(cards[i])
    }
  }, [])

  let chipIndex = 0

  return (
    <div className="custom-keyboards-container">
      <h1 className="title">Custom Keyboards</h1>
      <Card className="text-card">
        <p>
          I love building and typing on custom keyboards. I probably can't come
          back to type on a membrane keyboard again 😭
        </p>
      </Card>
      <div className="keyboard-card-container">
        {customKeyboardDetailList.map(
          (customKeyboardDetail, customKeyboardIndex) => (
            <KeyboardCard
              key={`custom-keyboard-${customKeyboardIndex}`}
              keyboardId={customKeyboardDetail.id}
            >
              {customKeyboardDetail.loaded ? (
                <Fragment>
                  {customKeyboardDetail.fulfilled &&
                    customKeyboardDetail.images &&
                    customKeyboardDetail.images.length && (
                      <ImageSwiper width="100%" height={500}>
                        {customKeyboardDetail.images.map(
                          (image, imageIndex) => (
                            <LazyImage
                              src={`custom-keyboards/images/${image.path}`}
                              hash={image.hash}
                              originalWidth={image.originalWidth}
                              originalHeight={image.originalHeight}
                              width="100%"
                              height="100%"
                              alt={`image-${customKeyboardDetail.id}-${imageIndex}`}
                              key={`image-${customKeyboardDetail.id}-${imageIndex}`}
                            />
                          ),
                        )}
                      </ImageSwiper>
                    )}
                  <h2>{customKeyboardDetail.title}</h2>
                  {!customKeyboardDetail.fulfilled && (
                    <p className="not-fulfilled">
                      Keyboard in shipment state or group buy status is not
                      fulfilled yet ...
                    </p>
                  )}
                  <div className="chip-group-container">
                    {customKeyboardDetail.layout && (
                      <div className="chip-container">
                        <p>Layout</p>
                        <Chip index={chipIndex++}>
                          {customKeyboardDetail.layout}
                        </Chip>
                      </div>
                    )}
                    {customKeyboardDetail.pcbs &&
                      customKeyboardDetail.pcbs.length && (
                        <div className="chip-container">
                          <p>PCB</p>
                          {customKeyboardDetail.pcbs.map((pcb, pcbIndex) => (
                            <Chip index={chipIndex++} key={`pcb-${pcbIndex}`}>
                              {pcb}
                            </Chip>
                          ))}
                        </div>
                      )}
                    {customKeyboardDetail.plates &&
                      customKeyboardDetail.plates.length && (
                        <div className="chip-container">
                          <p>Plate</p>
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
                        <div className="chip-container">
                          <p>Case Color</p>
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
                        <div className="chip-container">
                          <p>Case Material</p>
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
                        <div className="chip-container">
                          <p>Keycap</p>
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
                        <div className="chip-container">
                          <p>Switch</p>
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
                        <div className="chip-container">
                          <p>Stabilizer</p>
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
                    {customKeyboardDetail.dampenings &&
                      customKeyboardDetail.dampenings.length && (
                        <div className="chip-container">
                          <p>Dampening</p>
                          {customKeyboardDetail.dampenings.map(
                            (dampening, dampeningIndex) => (
                              <Chip
                                index={chipIndex++}
                                key={`dampening-${dampeningIndex}`}
                              >
                                {dampening}
                              </Chip>
                            ),
                          )}
                        </div>
                      )}
                    {customKeyboardDetail.mountings &&
                      customKeyboardDetail.mountings.length && (
                        <div className="chip-container">
                          <p>Mounting</p>
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
                  <p className="description">
                    {customKeyboardDetail.description}
                  </p>
                  <div className="button-container">
                    {customKeyboardDetail.website && (
                      <IconButton
                        icon="/images/icons/link.png"
                        title="Link"
                        onClick={() =>
                          window.open(customKeyboardDetail.website)
                        }
                      />
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
                  <div className="button-container">
                    <Skeleton
                      width={32}
                      height={32}
                      styles={{ borderRadius: '100%' }}
                    />
                  </div>
                </Fragment>
              )}
            </KeyboardCard>
          ),
        )}
      </div>
    </div>
  )
}

export default CustomKeyboardsPage
