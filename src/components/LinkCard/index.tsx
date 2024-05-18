import { CSSProperties } from 'react'
import './index.css'

const LinkCard = ({
  children,
  styles,
  href,
  title,
}: {
  children: any
  styles?: CSSProperties
  href: string
  title?: string
}) => {
  return (
    <div className="link-card" style={styles}>
      <a className="overlay" href={href} title={title}>
        {href}
      </a>
      {children}
    </div>
  )
}

export default LinkCard
