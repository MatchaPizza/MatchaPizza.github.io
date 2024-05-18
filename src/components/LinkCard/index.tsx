import './index.css'

const LinkCard = ({
  children,
  href,
  title,
}: {
  children: any
  href: string
  title?: string
}) => {
  return (
    <div className="link-card">
      <a className="overlay" href={href} title={title}>
        {href}
      </a>
      {children}
    </div>
  )
}

export default LinkCard
