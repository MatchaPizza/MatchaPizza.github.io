import Button from '@components/Button'
import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const styles: Record<string, CSSProperties> = {
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 16,
    },
  }

  const redirectMainPage = () => {
    navigate('/')
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Page not found</h1>
      <Button onClick={redirectMainPage}>Home</Button>
    </div>
  )
}

export default NotFound
