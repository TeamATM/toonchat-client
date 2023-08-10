import { css } from '@emotion/react';
import { FC, useEffect, useState } from 'react';
import color from '@/styles/color';
import SectionLine from '@/components/common/sectionLine/SectionLine';
import HomeIcon from '../icons/HomeIcon';
import ChatIcon from '../icons/ChatIcon';
import CommunityIcon from '../icons/CommunityIcon';
import ProfileIcon from '../icons/ProfileIcon';
import NavButtonWrapper from './NavButton/NavButtonWrapper';

interface NavProps {
  pageName: 'Friends' | 'Chat' | 'Community' | 'Profile'
}

const BottomNavigation: FC<NavProps> = ({ pageName }) => {
  const [homeColor, setHomeColor] = useState(color.greenGray);
  const [chatColor, setChatColor] = useState(color.greenGray);
  const [communityColor, setCommunityColor] = useState(color.greenGray);
  const [profileColor, setProfileColor] = useState(color.greenGray);

  useEffect(() => {
    if (pageName === 'Friends') {
      setHomeColor(color.black);
    } else if (pageName === 'Chat') {
      setChatColor(color.black);
    } else if (pageName === 'Community') {
      setCommunityColor(color.black);
    } else {
      setProfileColor(color.black);
    }
  }, []);

  return (
    <div css={navContainerCSS}>
      <SectionLine />
      <div css={BottomNavCSS}>
        <NavButtonWrapper color={homeColor} linkUrl="/friends">
          <HomeIcon color={homeColor} />
          Friends
        </NavButtonWrapper>

        {/* TODO: 커뮤니티, 프로필 페이지 제작을 해야함 */}
        <NavButtonWrapper color={chatColor} linkUrl="/chats">
          <ChatIcon color={chatColor} />
          Chat
        </NavButtonWrapper>
        <NavButtonWrapper color={communityColor} linkUrl="/community">
          <CommunityIcon color={communityColor} />
          Community
        </NavButtonWrapper>
        <NavButtonWrapper color={profileColor} linkUrl="/profile">
          <ProfileIcon color={profileColor} />
          Profile
        </NavButtonWrapper>
      </div>
    </div>
  );
};

export default BottomNavigation;

const navContainerCSS = css`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: #FFFFFF;
`;

const BottomNavCSS = css`
  padding: 0.75rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
