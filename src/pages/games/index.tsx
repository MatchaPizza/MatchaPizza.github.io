import Card from '@components/Card'
import { Fragment, useEffect, useState } from 'react'
import games from '@games/index.json'
import GameDetail, { InitGameDetail } from '@interfaces/games'
import IconButton from '@components/IconButton'
import Skeleton from '@components/Skeleton'
import './index.css'

const GamesPage = () => {
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

  return (
    <div className="games-container">
      <h1 className="title">Games</h1>
      <Card className="text-card">
        <p>
          I game even I don't play a lot of titles. Here are the games I mostly
          play
        </p>
      </Card>
      <div className="game-card-container">
        {gameDetailList.map((gameDetail, gameIndex) => (
          <Card key={`game-card-${gameIndex}`}>
            {gameDetail.loaded ? (
              <Fragment>
                <h2>{gameDetail.title}</h2>
                <p>{gameDetail.description}</p>
                <div className="button-container">
                  {gameDetail.personalSite && (
                    <IconButton
                      icon="/images/icons/game.png"
                      title="Personal Game Page"
                      onClick={() => window.open(gameDetail.personalSite)}
                    />
                  )}
                  {gameDetail.website && (
                    <IconButton
                      icon="/images/icons/link.png"
                      title="Game Site"
                      onClick={() => window.open(gameDetail.website)}
                    />
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
                <div className="button-container">
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
      <Card className="text-card">
        <p>
          I downloaded many games on steam or other platforms, but never have
          the mood to start or finish them. However, I do watch people streaming
          games on Twitch so I guess that counts
        </p>
      </Card>
    </div>
  )
}

export default GamesPage
