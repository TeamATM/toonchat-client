import { css } from '@emotion/react';
import SEO from '@/components/common/head/SEO';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { findPostById } from '@/utils/api/boards';
import Loading from '@/components/common/dialog/Loading';
import color from '@/styles/color';
import { postDetailDateParse } from '@/utils/services/date';
import { PostData } from '@/types/post';
import PostHeader from '@/components/community/PostHeader';
import Image from 'next/image';
import PostStatus from '@/components/community/postDetail/PostStatus';
import DivideLine from '@/components/common/divideLine/DivideLine';
import CommentList from '@/components/community/postDetail/Comment';
import CommentInput from '@/components/community/postDetail/CommentInput';

type postParams = {
  character_id?: string;
  post_id?: string;
};

const Post = () => {
  const router = useRouter();
  const { character_id: characterId, post_id: postId }: postParams = router.query;

  const [post, setPost] = useState<PostData>();
  useEffect(() => {
    if (typeof characterId === 'string' && typeof postId === 'string') {
      findPostById(characterId, postId).then((data) => {
        setPost(data);
      }).catch((error) => {
        console.error('Error fetching post:', error);
      });
    }
  }, [characterId, postId]);

  return (
    <>
      <SEO title="Community - Post" />
      <div css={css`height: 100vh; display: grid; grid-template-rows: auto 1fr auto;`}>
        <PostHeader />
        <section css={pageCSS}>
          <div css={postCSS}>
            {post ? (
              <div>
                {/* TODO: 게시글 쓴 사람의 이미지가 필요함 */}
                <div css={postInfoCSS}>
                  <Image src="/default-user.png" alt="user-profile" width={26} height={26} />
                  <div css={css`padding-left: 0.5rem;`}>
                    <div css={writerNameCSS}>{post.writerName}</div>
                    <div css={dateCSS}>{postDetailDateParse(post.createdAt)}</div>
                  </div>
                </div>
                <div css={postMainCSS}>
                  <div css={titleCSS}>{post.title}</div>
                  <div css={contentCSS}>{post.content}</div>
                </div>
                <PostStatus />
              </div>
            )
              : <Loading />}
          </div>
          <DivideLine />
          <CommentList characterId={characterId} postId={postId} />
        </section>
        <CommentInput characterId={characterId} postId={postId} />
      </div>
    </>
  );
};
export default Post;

const pageCSS = css`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const postCSS = css`
  width: 100%;
  padding: 1rem 0;
`;

const titleCSS = css`
  font-size: 1rem;
  font-weight: bold;
  color:${color.black};

  padding-bottom: 1rem;
`;

const contentCSS = css`
  font-size: 0.75rem;
  color:${color.gray};
`;

const postInfoCSS = css`
  padding: 0.2rem 0 0.2rem 0;
  display: flex;
  flex-direction: row;
`;

const writerNameCSS = css`
  font-size: 0.9rem;
  color:${color.black};
  padding-bottom: 0.2rem;
`;

const dateCSS = css`
  font-size: 0.6rem;
  color:${color.gray};
`;

const postMainCSS = css`
  padding: 1.25rem 0 0.2rem 0;
`;
