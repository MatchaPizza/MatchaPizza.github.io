import { CSSProperties } from 'react'
import './index.css'

const IconButton = ({
  icon,
  onClick,
  styles,
}: {
  icon: string
  onClick?: () => void
  styles?: CSSProperties
}) => {
  return (
    <div className="icon-button" onClick={onClick} style={styles}>
      <img className="icon-button-icon" src={icon} alt="icon-button-icon" />
    </div>
  )
}

export default IconButton
