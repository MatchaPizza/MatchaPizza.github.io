import { ImageDetail } from "./image"

interface ProjectDetail {
  id: number
  title?: string
  image?: ImageDetail
  website?: string
  github?: string
  description?: string
  loaded: boolean
}

export const InitProjectDetail: ProjectDetail = {
  id: 0,
  loaded: false,
}

export default ProjectDetail
