import './index.css'

const Tooltip = ({
  children,
  message,
  position = 'top',
}: {
  children: JSX.Element
  message: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}) => {
  let positionClassName = ''

  switch (position) {
    case 'top': {
      positionClassName = 'tooltip-message-top'
      break
    }
    case 'bottom': {
      positionClassName = 'tooltip-message-bottom'
      break
    }
    case 'left': {
      positionClassName = 'tooltip-message-left'
      break
    }
    case 'right': {
      positionClassName = 'tooltip-message-right'
      break
    }
    default: {
      console.error('invalid position for tooltip')
    }
  }

  return (
    <div className="tooltip">
      <span className={`tooltip-message ${positionClassName}`}>{message}</span>
      {children}
    </div>
  )
}

export default Tooltip
