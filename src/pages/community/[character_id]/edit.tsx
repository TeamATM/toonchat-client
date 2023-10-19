import { css } from '@emotion/react';
import SEO from '@/components/common/head/SEO';
import { FormEvent, useState } from 'react';
import PostHeader from '@/components/community/PostHeader';
import DivideLine from '@/components/common/divideLine/DivideLine';
import Button from '@/components/common/button/Button';
import { createPost } from '@/utils/api/boards';
import { useRouter } from 'next/router';
import Toast from '@/components/common/toast/Toast';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const router = useRouter();
  const { character_id: characterId } = router.query;

  const handleToastClose = () => {
    setToastMessage('');
  };
  const messageHandler = (message: string) => {
    setToastMessage(message);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (characterId && typeof characterId === 'string') {
      if (title === '' || title.length > 30) {
        messageHandler('제목을 30자 이내로 작성해주세요! :)');
        return;
      }

      if (content === '' || content.length > 3000) {
        messageHandler('내용은 3000자 이내로 작성해주세요! :)');
        return;
      }

      const result = await createPost(characterId, title, content);

      if (result.status === 201) {
        router.push({
          pathname: `/community/${characterId}`,
        });
        return;
      }
      messageHandler('게시글 작성에 실패했습니다 :(');
    }
    router.push({
      pathname: '/community',
    });
  };

  return (
    <>
      <SEO title="Community - Post Editor" />
      <section css={pageCSS}>
        <PostHeader />
        <form onSubmit={handleSubmit} css={formCSS}>
          <input type="text" placeholder="제목" css={inputTagCSS} value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea
            value={content}
            placeholder="내용을 입력해주세요."
            onChange={(e) => setContent(e.target.value)}
            css={textareaCSS}
          />
          <div css={footerCSS}>
            <DivideLine />
            <Button theme="green">글 작성</Button>
          </div>
        </form>
      </section>
      {
        toastMessage
          ? <Toast message={toastMessage} handleClose={handleToastClose} />
          : null
      }
    </>
  );
};
export default Post;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const formCSS = css`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

const inputTagCSS = css`
  width: 100%;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  outline: none;
  background: none;
  border: none;
`;

const textareaCSS = css`
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
  resize: none;
  border: none;
  outline: none;
  font-size: 0.75rem;
`;

const footerCSS = css`
  padding-bottom: 1rem;
`;
