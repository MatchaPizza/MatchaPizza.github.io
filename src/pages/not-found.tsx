import './common.css'
import './not-found.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="title">Page not found</h1>
      <a className="button" href="/">
        Home
      </a>
    </div>
  )
}

export default NotFound
