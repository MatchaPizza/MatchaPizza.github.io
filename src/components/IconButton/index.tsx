import { CSSProperties } from 'react'
import './index.css'

const IconButton = ({
  icon,
  onClick,
  title,
  styles,
  disabled,
}: {
  icon?: string
  onClick?: () => void
  title?: string
  styles?: CSSProperties
  disabled?: boolean
}) => {
  return (
    <div
      className={`icon-button${disabled ? ' disabled' : ''}`}
      style={styles}
      title={title}
      {...(!disabled && { onClick })}
    >
      {icon && (
        <img className="icon-button-icon" src={icon} alt="icon-button-icon" />
      )}
    </div>
  )
}

export default IconButton
