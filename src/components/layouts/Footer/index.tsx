import { MutableRefObject } from 'react'
import './index.css'

const Footer = ({
  footerRef,
}: {
  footerRef: MutableRefObject<HTMLDivElement | null>
}) => {
  return (
    <div className="footer-container" ref={footerRef}>
      <div>This is the footer</div>
    </div>
  )
}

export default Footer
