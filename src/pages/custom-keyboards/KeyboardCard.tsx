const KeyboardCard = ({
  children,
  keyboardId,
}: {
  children: any
  keyboardId: number
}) => {
  return (
    <div
      className="keyboard-card"
      style={{
        backgroundColor: 'white',
        color: '#595959',
        borderRadius: 10,
      }}
      data-keyboard-id={keyboardId}
    >
      {children}
    </div>
  )
}

export default KeyboardCard
