import color from '@/styles/color';
import PostWriteIcon from '@/components/icons/PostWriteIcon';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const WriteButton = () => {
  const router = useRouter();
  const { character_id: characterId } = router.query;

  const buttonHandler = () => {
    if (characterId && typeof characterId === 'string') {
      router.push(`/community/${characterId}/edit`);
    }
  };

  return (
    <button onClick={buttonHandler} css={buttonCSS} type="button">
      <PostWriteIcon color={color.black} />
      <span css={textCSS}>글쓰기</span>
    </button>
  );
};

export default WriteButton;

const buttonCSS = css`
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  z-index: 5;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 0.5rem;
  border: none;
  border-radius: 1rem;

  background-color: ${color.offWhite};
  color: ${color.black};

  &:active, &:hover {
    background-color: ${color.lightGray};
  }

`;

const textCSS = css`
  font-size: 1rem;
`;
