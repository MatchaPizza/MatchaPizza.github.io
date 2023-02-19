import useTabletView from "@hooks/useTabletView"
import { CSSProperties } from "react"

const CustomKeyboardsPage = () => {
  const tabletView = useTabletView()

  const styles: Record<string, Record<string, CSSProperties>> = {
    main: {
      container: {
        flex: 1,
        margin: `${tabletView ? 16 : 64}px ${tabletView ? 16 : 128}px`,
      },
      titleText: {
        fontSize: tabletView ? 32 : 48,
      },
    },
  }

  return (
    <div style={styles.main.container}>
      <h1 style={styles.main.titleText}>Custom Keyboards</h1>
    </div>
  )
}

export default CustomKeyboardsPage
