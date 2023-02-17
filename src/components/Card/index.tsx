import { CSSProperties } from 'react'
import './index.css'

const Card = ({
  children,
  styles,
}: {
  children: any
  styles?: CSSProperties
}) => {
  return (
    <div className="card" style={styles}>
      {children}
    </div>
  )
}

export default Card
