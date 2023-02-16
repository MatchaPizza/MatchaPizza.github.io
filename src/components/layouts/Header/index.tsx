import './index.css'

const Header = () => {
  return (
    <div className="header-container">
      <img src="matcha.png" alt="matcha-icon" className="matcha-icon" />
      <h3>MatchaPizza's Github Page</h3>
      <div style={{ flex: 1 }} />
      <div>
        <p>This is the button group</p>
      </div>
    </div>
  )
}

export default Header
