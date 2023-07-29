import { css } from '@emotion/react';
import color from '@/styles/color';
import HomeIcon from '../icons/HomeIcon';
import ChatIcon from '../icons/ChatIcon';
import CommunityIcon from '../icons/CommunityIcon';
import ProfileIcon from '../icons/ProfileIcon';
import NavButtonWrapper from './NavButton/NavButtonWrapper';

const BottomNavigation = () => (
  <div css={BottomNavCSS}>
    <NavButtonWrapper color={color.greenGray} linkUrl="/user">
      <HomeIcon color={color.greenGray} />
      Home
    </NavButtonWrapper>

    {/* TODO: 커뮤니티, 프로필 페이지 제작을 해야함 */}
    <NavButtonWrapper color={color.greenGray} linkUrl="/user">
      <ChatIcon color={color.greenGray} />
      Chat
    </NavButtonWrapper>
    <NavButtonWrapper color={color.greenGray} linkUrl="/user">
      <CommunityIcon color={color.greenGray} />
      Community
    </NavButtonWrapper>
    <NavButtonWrapper color={color.greenGray} linkUrl="/user">
      <ProfileIcon color={color.greenGray} />
      Profile
    </NavButtonWrapper>
  </div>
);

export default BottomNavigation;

const BottomNavCSS = css`
  position: fixed;
  bottom: 0;
  width: 400px;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
