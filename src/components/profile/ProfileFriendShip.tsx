import { css } from '@emotion/react';
import color from '@/styles/color';

// TODO: 친밀도, 친구된 지 며칠됐는 지 알려주는 API를 만들어주세요~!
const ProfileFriendShip = () => (
  <div css={css`width:100%; margin:1rem 0 3rem; font-weight: bold; display:grid; grid-template-columns: repeat(2, 1fr); justify-content: space-between;`}>
    <div css={css`display:flex; flex-direction:column; align-items: center; gap:0.25rem;`}>
      <div css={css`font-size:0.875rem; color: ${color.greenGray};`}>조금씩 친해지는 사이</div>
      <div css={css`font-size:1.125rem;`}>Lv. 0</div>
    </div>
    <div css={css`display:flex; flex-direction:column; align-items: center; gap:0.25rem;`}>
      <div css={css`font-size:0.875rem; color: ${color.greenGray};`}>우리가 친구 된 지</div>
      <div css={css`font-size:1.125rem;`}>1 일째</div>
    </div>
  </div>
);

export default ProfileFriendShip;
