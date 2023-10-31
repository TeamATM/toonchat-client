import { css } from '@emotion/react';
import { FC } from 'react';
import ChatIcon from '@/components/icons/ChatIcon';
import CommunityIcon from '@/components/icons/CommunityIcon';
import color from '@/styles/color';
import ProfileRouteWrapper from './routeButtons/ProfileRouteWrapper';

interface RouteProps {
  characterId: number
}

const ProfileRouteButtons:FC<RouteProps> = ({ characterId }) => (
  <div css={ButtonsWrapperCSS}>
    <ProfileRouteWrapper linkUrl={`/chats/${characterId}`} color={color.black}>
      <ChatIcon color={color.black} />
      chat
    </ProfileRouteWrapper>
    <ProfileRouteWrapper linkUrl={`/community/${characterId}`} color={color.black}>
      <CommunityIcon color={color.black} />
      Community
    </ProfileRouteWrapper>
  </div>
);

export default ProfileRouteButtons;

const ButtonsWrapperCSS = css`
  width:100%;
  padding-top:3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;
`;
