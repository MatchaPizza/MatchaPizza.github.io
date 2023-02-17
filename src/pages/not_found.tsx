import { CSSProperties } from 'react'

const NotFound = () => {
  const styles: Record<string, CSSProperties> = {
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 48,
      textAlign: 'center',
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Page not found</h1>
    </div>
  )
}

export default NotFound
