export interface PostData {
  characterId : string
  content : string
  createdAt : string
  id : number
  title : string
  updatedAt : string | null
  writerId : number
  writerName : string
}

export interface CommentData {
  id: number
  comment: string
  nickname: number
  createdDate: number
  modifiedDate: number
}

export type CommentProps = Omit<CommentData, 'modifiedDate'>;
