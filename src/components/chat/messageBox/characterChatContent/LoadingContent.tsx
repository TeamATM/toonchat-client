import Image from 'next/image';

const LoadingContent = () => (
  <Image
    src="/chat-loading.gif"
    width={20}
    height={20}
    alt="로딩"
  />
);

export default LoadingContent;
