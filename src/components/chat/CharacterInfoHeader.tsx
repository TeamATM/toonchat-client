import Image from 'next/image';
import Link from 'next/link';

const CharacterInfoHeader = () => (
  <>
    <Link href="/">
      <Image
        src="/back.svg"
        alt="back"
        width={24}
        height={24}
        priority
      />
    </Link>
    <Image
      src="/leeyj.png"
      width={44}
      height={44}
      style={imageStyle}
      alt="이영준"
    />
    <div>이영준</div>
    <div>#네이버웹툰 #김비서가왜그럴까</div>
  </>
);

export default CharacterInfoHeader;

const imageStyle = {
  borderRadius: '50%',
};
