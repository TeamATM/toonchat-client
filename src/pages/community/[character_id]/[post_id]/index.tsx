import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { findPostById } from '@/utils/api/boards';
import Loading from '@/components/common/dialog/Loading';
import color from '@/styles/color';
import { postDetailDateParse } from '@/utils/services/date';
import { PostData } from '@/types/post';
import PostHeader from '@/components/community/PostHeader';

const Post = () => {
  const router = useRouter();
  const { character_id: characterId, post_id: postId } = router.query;
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
      <section css={pageCSS}>
        <PostHeader />
        <div css={postCSS}>
          {post ? (
            <div>
              {/* TODO: 게시글 쓴 사람의 이미지가 필요함 */}
              <div css={postInfoCSS}>
                <div css={writerNameCSS}>{post.writerName}</div>
                <div css={dateCSS}>{postDetailDateParse(post.createdAt)}</div>
              </div>
              <div css={postMainCSS}>
                <div css={titleCSS}>{post.title}</div>
                <div css={contentCSS}>{post.content}</div>
              </div>
            </div>
          )
            : <Loading />}
        </div>
      </section>
      <BottomNavBar pageName="Community" />
    </>
  );
};
export default Post;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

const postCSS = css`
`;

const titleCSS = css`
  font-size: 1rem;
  font-weight:bold;
  color:${color.black};

  padding-bottom: 0.3rem
`;

const contentCSS = css`
  font-size: 0.75rem;
  color:${color.gray};
`;

const postInfoCSS = css`
  padding: 0.2rem 0 0.2rem 0;
`;

const writerNameCSS = css`
  font-size: 0.75rem;
  font-weight:bold;
  color:${color.black};
  padding-bottom: 0.2rem;
`;

const dateCSS = css`
  font-size: 0.6rem;
  color:${color.gray};
`;

const postMainCSS = css`
  padding: 0.2rem 0 0.2rem 0;
`;
