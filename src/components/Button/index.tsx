import { CSSProperties } from 'react'
import './index.css'

const Button = ({
  children,
  onClick,
  disabled,
  styles,
}: {
  children: string
  onClick?: () => void
  disabled?: boolean
  styles?: CSSProperties
}) => {
  return (
    <div
      className={`button${disabled ? ' disabled' : ''}`}
      style={styles}
      {...(!disabled && { onClick })}
    >
      {children}
    </div>
  )
}

export default Button
