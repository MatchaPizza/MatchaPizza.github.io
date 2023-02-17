import ClickableText from '@components/ClickableText'
import IconButton from '@components/IconButton'
import { CSSProperties, Fragment, useRef } from 'react'
import useDesktopView from '@hooks/useDesktopView'
import Card from '@components/Card'

const MainPage = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const desktopView = useDesktopView()

  const styles: Record<string, Record<string, CSSProperties>> = {
    background: {
      image: {
        backgroundImage: 'url("/images/background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      },
      mainTextBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        gap: 16,
        textAlign: 'center',
      },
      mainText: {
        fontSize: desktopView ? 64 : 48,
        fontWeight: 'bold',
      },
      secondaryText: {
        fontSize: desktopView ? 32 : 16,
        fontWeight: 'bold',
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
      },
      imageText: {
        fontSize: 16,
        position: 'absolute',
        bottom: 8,
        left: 8,
      },
      scrollButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
      },
    },
    main: {
      container: {
        padding: `128px ${desktopView ? 128 : 16}px 32px`,
      },
      titleText: {
        fontSize: desktopView ? 64 : 48,
        fontWeight: 'bold',
      },
    },
    content: {
      container: {
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: 'auto auto',
      },
      card: {
        margin: 8,
        padding: 8,
      },
    },
  }

  const jumpToMainStart = () => {
    mainRef.current?.scrollIntoView()
  }

  const openMatchaPizzaPage = () => {
    window.open('https://github.com/matchapizza')
  }

  const openJoakPage = () => {
    window.open('https://github.com/joakqq')
  }

  return (
    <Fragment>
      <div style={styles.background.image} className="main-background-image">
        <div style={styles.background.mainTextBox}>
          <div style={styles.background.mainText}>Hobby Page</div>
          <div style={styles.background.secondaryText}>
            <ClickableText onClick={openMatchaPizzaPage}>
              MatchaPizza
            </ClickableText>
            <p>aka</p>
            <ClickableText onClick={openJoakPage}>Joak</ClickableText>
          </div>
        </div>
        <p style={styles.background.imageText}>Joak 🍵 Pizza 🍕 React 😂</p>
        <IconButton
          styles={styles.background.scrollButton}
          icon="images/icons/down-arrow.png"
          onClick={jumpToMainStart}
        />
      </div>
      <div ref={mainRef} style={styles.main.container}>
        <h1 style={styles.main.titleText}>My Hobbies</h1>
        <div style={styles.content.container}>
          <Card styles={styles.content.card}>
            <h2>Hello World 1</h2>
            {new Array(50).fill(1).map(() => (
              <p>Hello world!</p>
            ))}
          </Card>
          <Card styles={styles.content.card}>
            <h2>Hello World 2</h2>
            {new Array(50).fill(1).map(() => (
              <p>Hello world!</p>
            ))}
          </Card>
          <Card styles={styles.content.card}>
            <h2>Hello World 3</h2>
            {new Array(50).fill(1).map(() => (
              <p>Hello world!</p>
            ))}
          </Card>
        </div>
      </div>
    </Fragment>
  )
}

export default MainPage
