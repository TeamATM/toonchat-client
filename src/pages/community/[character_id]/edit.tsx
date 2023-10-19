import { css } from '@emotion/react';
import SEO from '@/components/common/head/SEO';
import { FormEvent, useState } from 'react';
import PostHeader from '@/components/community/PostHeader';
import DivideLine from '@/components/common/divideLine/DivideLine';
import Button from '@/components/common/button/Button';
// import { useRouter } from 'next/router';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 게시글 유효성 검사를 해야함

    alert(`${title}, ${content}`);

    // 게시글 작성 성공!
    // router.push({
    //   pathname: '/community',
    // });
  };

  return (
    <>
      <SEO title="Community - Post Editor" />
      <PostHeader />
      <section css={pageCSS}>
        <form onSubmit={handleSubmit} css={css`width: 100%;`}>
          <input type="text" placeholder="제목" css={inputTagCSS} value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <DivideLine />
          <Button theme="green">글 작성</Button>
        </form>
      </section>
    </>
  );
};
export default Post;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
