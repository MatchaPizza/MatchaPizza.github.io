import './index.css'

const Card = ({
  className,
  children,
}: {
  className?: string
  children: any
}) => {
  return (
    <div className={`card${className ? ' ' + className : ''}`}>
      {children}
    </div>
  )
}

export default Card
