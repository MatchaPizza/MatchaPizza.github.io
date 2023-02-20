import { CSSProperties } from 'react'
import './index.css'

const IconButton = ({
  icon,
  onClick,
  styles,
  disabled,
}: {
  icon?: string
  onClick?: () => void
  styles?: CSSProperties
  disabled?: boolean
}) => {
  return (
    <div
      className={`icon-button${disabled ? ' disabled' : ''}`}
      style={styles}
      {...(!disabled && { onClick })}
    >
      {icon && (
        <img className="icon-button-icon" src={icon} alt="icon-button-icon" />
      )}
    </div>
  )
}

export default IconButton
