interface ProjectDetail {
  id: number
  title?: string
  imagePath?: string
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
