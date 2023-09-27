import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if (session?.accessToken) {
      fetch('/api/users/test', {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [session]);

  return (
    <>
      <SEO title="Profile" />
      <section css={pageCSS}>
        <div>
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
        </div>
      </section>
      <BottomNavBar pageName="Profile" />
    </>
  );
};

export default Profile;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  padding-bottom: 0;
`;
