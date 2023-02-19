import ClickableText from '@components/ClickableText'
import IconButton from '@components/IconButton'
import { CSSProperties, Fragment, useRef } from 'react'
import useTabletView from '@hooks/useTabletView'
import ClickableCard from '@components/ClickableCard'
import useWindowWidth from '@hooks/useWindowWidth'
import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import LazyImage from '@components/LazyImage'
import {
  openJoakPage,
  openMatchaPizzaPage,
  redirectMainPage,
} from '@utils/github'

const MainPage = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const tabletView = useTabletView()
  const windowWidth = useWindowWidth()
  const navigate = useNavigate()

  const styles: Record<string, Record<string, CSSProperties>> = {
    background: {
      image: {
        minHeight: 'calc(100vh - 86px)',
        backgroundImage: 'url("/images/background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      },
      mainTextBox: {
        minHeight: 'calc(100vh - 86px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        gap: 16,
        textAlign: 'center',
      },
      mainText: {
        fontSize: tabletView ? 48 : 64,
        fontWeight: 'bold',
      },
      secondaryText: {
        fontSize: tabletView ? 16 : 32,
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
        padding: `128px ${windowWidth <= 1400 ? 16 : 128}px 32px`,
      },
      titleText: {
        fontSize: tabletView ? 48 : 64,
        fontWeight: 'bold',
      },
    },
    content: {
      container: {
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: windowWidth <= 1400 ? '100%' : '50% 50%',
      },
    },
    card: {
      container: {
        margin: 8,
        padding: 16,
      },
      titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      image: {
        objectFit: 'cover',
      },
      content: {
        marginTop: 8,
      },
    },
  }

  const jumpToMainStart = () => {
    mainRef.current?.scrollIntoView()
  }

  const navigateCustomKeyboardsPage = () => {
    navigate('/custom-keyboards')
  }

  const navigateCodingPage = () => {
    navigate('/coding')
  }

  const navigateGamesPage = () => {
    navigate('/games')
  }

  return (
    <Fragment>
      <div style={styles.background.image}>
        <div style={styles.background.mainTextBox}>
          <p style={styles.background.mainText}>Hobby Page</p>
          <div style={styles.background.secondaryText}>
            <ClickableText onClick={openMatchaPizzaPage}>
              MatchaPizza
            </ClickableText>
            <p>aka</p>
            <ClickableText onClick={openJoakPage}>Joak</ClickableText>
          </div>
          <Button onClick={redirectMainPage}>🌌 Main Page</Button>
        </div>
        <p style={styles.background.imageText}>Joak 🍵 Pizza 🍕 React 😂</p>
        <IconButton
          styles={styles.background.scrollButton}
          icon="images/icons/down-arrow.png"
          onClick={jumpToMainStart}
        />
      </div>
      <div ref={mainRef} style={styles.main.container}>
        <p style={styles.main.titleText}>My Hobbies</p>
        <div style={styles.content.container}>
          <ClickableCard
            styles={styles.card.container}
            onClick={navigateCustomKeyboardsPage}
          >
            <p style={styles.card.titleText}>Custom Keyboards</p>
            <LazyImage
              width="100%"
              height={300}
              styles={styles.card.image}
              src="/images/custom-keyboards.webp"
              alt="custom-keyboards"
            />
            <p style={styles.card.content}>
              I love building custom keyboards, and type on them
            </p>
          </ClickableCard>
          <ClickableCard
            styles={styles.card.container}
            onClick={navigateCodingPage}
          >
            <p style={styles.card.titleText}>Coding</p>
            <LazyImage
              width="100%"
              height={300}
              styles={styles.card.image}
              src="/images/coding.jpg"
              alt="coding"
            />
            <p style={styles.card.content}>
              I like coding, especially in AI and NLP
            </p>
          </ClickableCard>
          <ClickableCard
            styles={styles.card.container}
            onClick={navigateGamesPage}
          >
            <p style={styles.card.titleText}>Games</p>
            <LazyImage
              width="100%"
              height={300}
              styles={styles.card.image}
              src="/images/games.jpg"
              alt="games"
            />
            <p style={styles.card.content}>
              Althrough I don't play a lot games, I do watch people play games
            </p>
          </ClickableCard>
        </div>
      </div>
    </Fragment>
  )
}

export default MainPage
