import { chatHistoryAPI } from '../api/chats';

interface ChatContentsState {
  id: number, speaker: string, content: string, timestamp: number, loading: boolean,
}

interface resultData {
  messageId: string, content: string, createdAt: number, fromUser: string, replyMessageId: string,
}

type GetHistory = (
  setLoading: (isLoading: boolean) => void,
  characterId: number,
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
    replyMessageId: data.replyMessageId,
  }));

  initChatContents(history);
};

export default getHistory;
