import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { findBoardsById } from '@/utils/api/boards';
import Loading from '@/components/common/dialog/Loading';
import color from '@/styles/color';
import { postDetailDateParse } from '@/utils/services/date';

interface PostData {
  characterId : number
  content : string
  createdAt : string
  id : number
  title : string
  updatedAt : string
  writerId : number
  writerName : string
}

const Post = () => {
  const router = useRouter();
  const { character_id: characterId, post_id: postId } = router.query;
  const [post, setPost] = useState<PostData>();
  useEffect(() => {
    if (typeof characterId === 'string' && typeof postId === 'string') {
      findBoardsById(characterId, postId).then((data) => {
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
        <div css={postCSS}>
          {post ? (
            <div>
              {/* TODO: 게시글 쓴 사람의 이미지가 필요함 */}
              <div css={postInfoCSS}>
                <div css={writerNameCSS}>{post.writerName}</div>
                <div css={dateCSS}>{postDetailDateParse(post.createdAt)}</div>
              </div>
              <div css={titleCSS}>{post.title}</div>
              <div css={contentCSS}>{post.content}</div>
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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const postCSS = css`
`;

const titleCSS = css`
  font-size: 1rem;
  font-weight:bold;
  color:${color.black};
`;

const contentCSS = css`
  font-size: 0.75rem;
  color:${color.gray};
`;

const postInfoCSS = css`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
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
