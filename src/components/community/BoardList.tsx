import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { CharacterInfo } from '@/types/characterInfo';
import { findAllBoards } from '@/utils/api/boards';
import Loading from '../common/dialog/Loading';

const BoardList = () => {
  const [characterInfoList, setCharacterInfoList] = useState<CharacterInfo[]>([]);
  useEffect(() => {
    findAllBoards()
      .then((data) => setCharacterInfoList(data))
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, []);

  return (
    <section css={boardListWrapperCSS}>
      {characterInfoList ? (
        characterInfoList.map((characterInfo) => (
          <div key={characterInfo.id}>
            {characterInfo.name}
          </div>
        ))
      ) : <Loading />}
    </section>
  );
};

export default BoardList;

const boardListWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 0.375rem;
  padding-top: 1.25rem;
`;
