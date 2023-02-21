import { CSSProperties } from 'react'
import './index.css'

const colors: Array<string> = [
  '#550068',
  '#660076',
  '#760084',
  '#860093',
  '#9700a2',
  '#a700b1',
  '#b800c0',
  '#c800cf',
  '#d900df',
  '#ea00ef',
  '#f03fff',
  '#e655ff',
  '#dc66ff',
  '#d374ff',
  '#ca7fff',
  '#c28aff',
  '#bc93ff',
  '#b69bff',
  '#b3a2ff',
  '#b0a9ff',
]

const Chip = ({
  children,
  index,
  styles,
}: {
  children: string
  index?: number
  styles?: CSSProperties
}) => {
  const backgroundColor = colors[index ? index % colors.length : 0]

  const hexToRgb = (hexString: string) => {
    const hexCode = hexString.slice(1)
    const bigint = parseInt(hexCode, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return [r, g, b]
  }

  const getContrastColor = (backgroundColor: string) => {
    const rgb = hexToRgb(backgroundColor)
    var sum = Math.round((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000)
    return sum > 128 ? 'black' : 'white'
  }

  return (
    <div
      className="chip"
      style={{
        backgroundColor,
        color: getContrastColor(backgroundColor),
        ...styles,
      }}
    >
      <p>{children}</p>
    </div>
  )
}

export default Chip
