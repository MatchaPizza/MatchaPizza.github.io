interface GameDetail {
  id: number
  title?: string
  personalSite?: string
  website?: string
  description?: string
  loaded: boolean
}

export const InitGameDetail: GameDetail = {
  id: 0,
  loaded: false,
}

export default GameDetail
