export interface PostData {
  characterId : string
  content : string
  createdAt : string
  id : number
  title : string
  updatedAt : string | null
  writerId : number
  writerName : string
  likeCount: number
  comments: CommentData[]
}

export interface CommentData {
  id: number
  comment: string
  nickname: number
  createdAt: string
  updatedAt: string
}

export type CommentProps = Omit<CommentData, 'updatedAt'>;
