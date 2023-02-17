import { CSSProperties } from 'react'
import './index.css'

const ClickableCard = ({
  children,
  styles,
  onClick,
}: {
  children: any
  styles?: CSSProperties
  onClick?: () => void
}) => {
  return (
    <div className="clickable-card" style={styles} onClick={onClick}>
      {children}
    </div>
  )
}

export default ClickableCard
