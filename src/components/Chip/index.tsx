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
  '#b3a2ff',
  '#b69bff',
  '#bc93ff',
  '#c28aff',
  '#ca7fff',
  '#d374ff',
  '#dc66ff',
  '#e655ff',
  '#f03fff',
  '#ea00ef',
  '#d900df',
  '#c800cf',
  '#b800c0',
  '#a700b1',
  '#9700a2',
  '#860093',
  '#760084',
  '#660076',
]

const Chip = ({ children, index }: { children: string; index?: number }) => {
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
      }}
    >
      <p>{children}</p>
    </div>
  )
}

export default Chip
