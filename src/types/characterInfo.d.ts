export interface CharacterInfo {
  characterId: number,
  characterName: string,
  hashTag: string,
  statusMessage: string
  profileImageUrl: string,
  backgroundImageUrl: string,
}

export type CharacterStateProps = Omit<CharacterInfo, 'backgroundImageUrl' | 'statusMessage'>;

export type RecommendCharacterProps = Omit<CharacterInfo, 'backgroundImageUrl'>;
