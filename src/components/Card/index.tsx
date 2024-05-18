import { CSSProperties } from 'react'
import './index.css'

const Card = ({
  className,
  children,
  styles,
}: {
  className?: string
  children: any
  styles?: CSSProperties
}) => {
  return (
    <div className={`card${className ? ' ' + className : ''}`} style={styles}>
      {children}
    </div>
  )
}

export default Card
