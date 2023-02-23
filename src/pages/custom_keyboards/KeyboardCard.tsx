import { CSSProperties } from 'react'

const KeyboardCard = ({
  children,
  styles,
  keyboardId,
}: {
  children: any
  styles?: CSSProperties
  keyboardId: number
}) => {
  return (
    <div
      className="keyboard-card"
      style={{
        backgroundColor: 'white',
        color: '#595959',
        borderRadius: 10,
        ...styles,
      }}
      data-keyboard-id={keyboardId}
    >
      {children}
    </div>
  )
}

export default KeyboardCard
