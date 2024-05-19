import { ImageDetail } from "./image"

interface CustomKeyboardDetail {
  id: number
  title?: string
  description?: string
  layout?: string
  pcbs?: Array<string>
  plates?: Array<string>
  caseColors?: Array<string>
  caseMaterials?: Array<string>
  keycaps?: Array<string>
  switches?: Array<string>
  stabilizers?: Array<string>
  dampenings?: Array<string>
  mountings?: Array<string>
  images?: Array<ImageDetail>
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
