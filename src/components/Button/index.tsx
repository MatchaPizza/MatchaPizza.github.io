import { CSSProperties } from 'react'
import './index.css'

const Button = ({
  children,
  onClick,
  styles,
}: {
  children: string
  onClick?: () => void
  styles?: CSSProperties
}) => {
  return (
    <div className="button" onClick={onClick} style={styles}>
      {children}
    </div>
  )
}

export default Button
