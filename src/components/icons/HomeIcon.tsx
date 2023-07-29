import Image from 'next/image';

const HomeIcon = () => (
  <Image
    src="/icons/Home.svg"
    alt="home"
    width={30}
    height={30}
    priority
  />
);

export default HomeIcon;
