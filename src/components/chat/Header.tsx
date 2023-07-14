import Image from 'next/image';
import Link from 'next/link';

// 이영준의 이미지, 소속, 이름이 있을 예정
const Header = () => (
  <header>
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
      src="/AI.png"
      width={30}
      height={30}
      alt="이영준이될 사진"
    />
    <div>이영준</div>
    <div>#네이버웹툰 #김비서가왜그럴까</div>
  </header>
);

export default Header;
