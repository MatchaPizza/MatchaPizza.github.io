import { MatchaPizzaGithubPageRepo } from '@utils/github'
import './index.css'

const Header = () => {
  return (
    <header className="header-container">
      <div className="icon-container">
        <img
          src="images/icons/matcha.png"
          alt="matcha-icon"
          className="matcha-icon"
        />
        <a href="/" className="overlay" title="Home">
          home
        </a>
      </div>
      <h3>Joak's Hobby Page</h3>
      <div style={{ flex: 1 }} />
      <div className="icon-container">
        <img
          src="images/icons/github-mark-white.png"
          alt="github-icon"
          className="github-icon"
        />
        <a
          href={MatchaPizzaGithubPageRepo}
          className="overlay"
          title="MatchaPizza's github repository"
        >
          MatchaPizza's github repository
        </a>
      </div>
    </header>
  )
}

export default Header
