import Tooltip from '@components/Tooltip'
import { openProjectGithubPage } from '@utils/github'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const redirectHome = () => {
    navigate('/')
  }

  return (
    <div className="header-container">
      <Tooltip message="home" position="bottom">
        <img
          src="images/icons/matcha.png"
          alt="matcha-icon"
          className="matcha-icon"
          onClick={redirectHome}
        />
      </Tooltip>
      <h3>Joak's Hobby Page</h3>
      <div style={{ flex: 1 }} />
      <Tooltip message="github page repository" position="left">
        <img
          src="images/icons/github-mark-white.png"
          alt="github-icon"
          className="github-icon"
          onClick={openProjectGithubPage}
        />
      </Tooltip>
    </div>
  )
}

export default Header
