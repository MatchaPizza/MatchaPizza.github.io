import IconButton from '@components/IconButton'
import { Fragment, useRef } from 'react'
import LinkCard from '@components/LinkCard'
import LazyImage from '@components/LazyImage'
import {
  JoakGithubPage,
  JoakGithubRepo,
  MatchaPizzaGithubRepo,
} from '@utils/github'
import './common.css'
import './index.css'

const MainPage = () => {
  const mainRef = useRef<HTMLDivElement>(null)

  const jumpToMainStart = () => {
    mainRef.current?.scrollIntoView()
  }

  return (
    <Fragment>
      <div className="introduction-container">
        <LazyImage
          src="/images/background.jpg"
          hash="LA7Bf@%j-:xZ00RPM|WBxrMvM^RO"
          alt="background"
          width="100%"
          height="100%"
        />
        <div className="main-text-box">
          <h1 className="main-text">Hobby Page</h1>
          <div className="secondary-text">
            <a className="clickable-text" href={MatchaPizzaGithubRepo}>
              MatchaPizza
            </a>
            <p>aka</p>
            <a className="clickable-text" href={JoakGithubRepo}>
              Joak
            </a>
          </div>
          <a className="button" href={JoakGithubPage}>
            🌌 Main Page
          </a>
        </div>
        <p className="image-text">Joak 🍵 Pizza 🍕 React 😂</p>
        <IconButton
          icon="images/icons/down-arrow.png"
          title="Down"
          onClick={jumpToMainStart}
        />
      </div>
      <div className="section-container" ref={mainRef}>
        <h1 className="title">My Hobbies</h1>
        <div className="content-container">
          <LinkCard href="/#/custom-keyboards" title="Custom Keyboards">
            <h2 className="title">Custom Keyboards</h2>
            <LazyImage
              width="100%"
              height={300}
              src="/images/custom-keyboards.webp"
              hash="LFEMk3Mk~oTsPXIAs+JO%ytPDjsr"
              alt="custom-keyboards"
            />
            <p>I love building custom keyboards, and type on them</p>
          </LinkCard>
          <LinkCard href="/#/coding" title="Coding">
            <h2 className="title">Coding</h2>
            <LazyImage
              width="100%"
              height={300}
              src="/images/coding.jpg"
              hash="LAEMRSni4nD%5AayM_%g~Vj[D%.8"
              alt="coding"
            />
            <p>I like coding, especially in AI and NLP</p>
          </LinkCard>
          <LinkCard href="/#/games" title="Games">
            <h2 className="title">Games</h2>
            <LazyImage
              width="100%"
              height={300}
              src="/images/games.jpg"
              hash="LgHn,S$]$y?H.6xwNLNF~qt7V?og"
              alt="games"
            />
            <p>
              Althrough I don't play a lot games, I do watch people play games
            </p>
          </LinkCard>
        </div>
      </div>
    </Fragment>
  )
}

export default MainPage
