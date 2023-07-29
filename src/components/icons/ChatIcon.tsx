import Image from 'next/image';

const ChatIcon = () => (
  <Image
    src="/icons/Chat.svg"
    alt="Chat"
    width={30}
    height={30}
    priority
  />
);

export default ChatIcon;
