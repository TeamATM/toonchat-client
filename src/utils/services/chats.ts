import { chatHistoryAPI } from '../api/chats';

interface ChatContentsState {
  id: number, speaker: string, content: string, timestamp: number, loading: boolean,
}

interface resultData {
  messageId: string, content: string, createdAt: number, fromUser: string;
}

type GetHistory = (
  setLoading: (isLoading: boolean) => void,
  characterId: string,
  characterName: string,
  initChatContents: (history:ChatContentsState[]) => void
) => void

const getHistory: GetHistory = async (setLoading, characterId, characterName, initChatContents) => {
  setLoading(false);
  const result = await chatHistoryAPI(characterId);
  const history = result.map((data: resultData) => ({
    id: data.messageId,
    content: data.content,
    timestamp: data.createdAt,
    speaker: data.fromUser ? 'me' : characterName,
  }));
  initChatContents(history);
};

// TODO: history 관련 service 레이어 함수가 더 많아지면 아래 eslint 막은 것 풀기
// eslint-disable-next-line import/no-anonymous-default-export
export default getHistory;
