import Card from '@components/Card'
import useTabletView from '@hooks/useTabletView'
import useWindowWidth from '@hooks/useWindowWidth'
import { CSSProperties, Fragment, useEffect, useState } from 'react'
import games from '@games/index.json'
import GameDetail, { InitGameDetail } from '@interfaces/games'
import Tooltip from '@components/Tooltip'
import IconButton from '@components/IconButton'
import Skeleton from '@components/Skeleton'

const GamesPage = () => {
  const tabletView = useTabletView()
  const windowWidth = useWindowWidth()
  const [gameDetailList, setGameDetailList] = useState<Array<GameDetail>>(
    games.map((game) => ({
      ...InitGameDetail,
      id: game.id,
    })),
  )

  useEffect(() => {
    games.forEach(async (game) => {
      try {
        const gameDetail: GameDetail = await import(`@games/${game.path}`)
        setGameDetailList((list) =>
          list.map((element) =>
            element.id === gameDetail.id && !element.loaded
              ? { ...gameDetail, loaded: true }
              : element,
          ),
        )
      } catch (err) {
        console.error(`failed to load from ${game.path}`)
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
    },
    game: {
      container: {
        margin: 8,
        display: 'grid',
        gridTemplateColumns: windowWidth <= 1400 ? '100%' : '50% 50%',
      },
      card: {
        margin: 8,
        padding: 16,
      },
      cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
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
      <h1 style={styles.main.titleText}>Games</h1>
      <Card styles={styles.content.card}>
        <p style={styles.content.text}>
          I game even I don't play a lot of titles. Here are the games I mostly
          play
        </p>
      </Card>
      <div style={styles.game.container}>
        {gameDetailList.map((gameDetail, gameIndex) => (
          <Card key={`game-card-${gameIndex}`} styles={styles.game.card}>
            {gameDetail.loaded ? (
              <Fragment>
                <h2 style={styles.game.cardTitle}>{gameDetail.title}</h2>
                <p>{gameDetail.description}</p>
                <div style={styles.game.buttonContainer}>
                  {gameDetail.personalSite && (
                    <Tooltip message="Personal Game Page">
                      <IconButton
                        styles={styles.game.iconButton}
                        icon="/images/icons/game.png"
                        onClick={() => window.open(gameDetail.personalSite)}
                      />
                    </Tooltip>
                  )}
                  {gameDetail.website && (
                    <Tooltip message="Game Site">
                      <IconButton
                        styles={styles.game.iconButton}
                        icon="/images/icons/link.png"
                        onClick={() => window.open(gameDetail.website)}
                      />
                    </Tooltip>
                  )}
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <Skeleton width="100%" height={28} />
                <Skeleton
                  width="100%"
                  height={19}
                  styles={{ margin: '8px 0px' }}
                />
                <div style={styles.game.buttonContainer}>
                  <Skeleton
                    width={32}
                    height={32}
                    styles={{ borderRadius: '100%' }}
                  />
                  <Skeleton
                    width={32}
                    height={32}
                    styles={{ borderRadius: '100%' }}
                  />
                </div>
              </Fragment>
            )}
          </Card>
        ))}
      </div>
      <Card styles={styles.content.card}>
        <p style={styles.content.text}>
          I downloaded many games on steam or other platforms, but never have
          the mood to start or finish them. However, I do watch people streaming
          games on Twitch so I guess that counts
        </p>
      </Card>
    </div>
  )
}

export default GamesPage
