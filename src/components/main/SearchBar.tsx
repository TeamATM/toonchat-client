import color from '@/styles/color';
import { css } from '@emotion/react';
import {
  ChangeEvent, KeyboardEvent, MouseEvent, useState,
} from 'react';
import SearchIcon from '../icons/SearchIcon';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  // TODO: 검색을 호출할 API가 필요함.
  const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(searchText);
      setSearchText('');
    }
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: 검색창을 누르면 호출할 API가 필요합니다.
    console.log(searchText);
    setSearchText('');
  };

  return (
    <div css={searchBarCSS}>
      <input css={inputCSS} value={searchText} onChange={changeHandler} onKeyPress={keyPressHandler} type="text" placeholder="search" />
      <button css={buttonCSS} type="button" onClick={clickHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;

const searchBarCSS = css`
  border-radius: 14px;
  background-color: ${color.whiteGray};
  padding: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${color.darkGreen};
`;

const inputCSS = css`
  outline: none;
  border: none;
  background: none;
  padding-left: 12px;
  padding-right: 12px;
  width: 80px;
`;

const buttonCSS = css`
  border: none;
  background: none;
`;
