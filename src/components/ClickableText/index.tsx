import { CSSProperties } from 'react'
import './index.css'

const ClickableText = ({
  styles,
  children,
  onClick,
}: {
  styles?: CSSProperties
  children: string
  onClick?: () => void
}) => {
  return (
    <p style={styles} className="clickable-text" onClick={onClick}>
      {children}
    </p>
  )
}

export default ClickableText
