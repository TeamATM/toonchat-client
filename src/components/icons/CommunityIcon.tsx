import Image from 'next/image';

const CommunityIcon = () => (
  <Image
    src="/icons/Community.svg"
    alt="Community"
    width={30}
    height={30}
    priority
  />
);

export default CommunityIcon;
