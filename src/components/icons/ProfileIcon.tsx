import Image from 'next/image';

const ProfileIcon = () => (
  <Image
    src="/icons/Profile.svg"
    alt="Profile"
    width={30}
    height={30}
    priority
  />
);

export default ProfileIcon;
