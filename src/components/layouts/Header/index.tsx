import Tooltip from '@components/Tooltip'
import { MutableRefObject } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = ({
  headerRef,
}: {
  headerRef: MutableRefObject<HTMLDivElement | null>
}) => {
  const navigate = useNavigate()

  const redirectHome = () => {
    navigate('/')
  }

  const openProjectGithubPage = () => {
    window.open('https://github.com/MatchaPizza/MatchaPizza.github.io')
  }

  return (
    <div className="header-container" ref={headerRef}>
      <Tooltip message="home" position="bottom">
        <img
          src="images/icons/matcha.png"
          alt="matcha-icon"
          className="matcha-icon"
          loading="lazy"
          onClick={redirectHome}
        />
      </Tooltip>
      <h3>Joak's Hobby Github Page</h3>
      <div style={{ flex: 1 }} />
      <Tooltip message="project github repository" position="left">
        <img
          src="images/icons/github-mark-white.png"
          alt="github-icon"
          className="github-icon"
          loading="lazy"
          onClick={openProjectGithubPage}
        />
      </Tooltip>
    </div>
  )
}

export default Header
