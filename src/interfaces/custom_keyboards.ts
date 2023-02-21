interface CustomKeyboardDetail {
  id: number
  title?: string
  description?: string
  pcbs?: Array<'Wired Hotswap' | 'Wireless Hotswap' | ' Wired Solder'>
  plates?: Array<'PC' | 'Steel' | 'FR4' | 'POM' | 'Aluminium'>
  caseColors?: Array<string>
  caseMaterials?: Array<string>
  keycaps?: Array<string>
  switches?: Array<string>
  stabilizers?: Array<string>
  foams?: Array<string>
  mountings?: Array<string>
  images?: Array<string>
  website?: string
  fulfilled: boolean
  loaded: boolean
}

export const InitCustomKeyboardDetail: CustomKeyboardDetail = {
  id: 0,
  loaded: false,
  fulfilled: false,
}

export default CustomKeyboardDetail
