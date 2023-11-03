import Link from 'next/link';
import Button from '@/components/common/button/Button';
import { useSession } from 'next-auth/react';

const SessionButtons = () => {
  const { data: session }: any = useSession();

  if (session) {
    return (
      <>
        <Link href="/friends">
          <Button theme="green">
            시작하기
          </Button>
        </Link>
        <Link href="/chats/2">
          <Button theme="white">
            영준이와 대화하기
          </Button>
        </Link>
      </>
    );
  }
  return (
    <Link href="/login">
      <Button theme="green">
        Log in
      </Button>
    </Link>
  );
};

export default SessionButtons;
