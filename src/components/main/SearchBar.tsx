import color from '@/styles/color';
import { css } from '@emotion/react';
import {
  ChangeEvent, KeyboardEvent, MouseEvent, useState,
} from 'react';
import SearchIcon from '../icons/SearchIcon';
import Toast from '../toast/Toast';

interface ToastMessage {
  key: number;
  message: string;
}

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);
  const [toastKey, setToastKey] = useState(0);

  const handleToastClose = (key: number) => {
    setToastMessages(toastMessages.filter((toast) => toast.key !== key));
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  // TODO: 검색을 호출할 API가 필요함.
  const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(searchText);
      setToastKey(toastKey + 1);
      setToastMessages([
        ...toastMessages,
        { key: toastKey, message: '검색 기능은 추후에 지원될 예정입니다.' },
      ]);
      setSearchText('');
    }
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: 검색창을 누르면 호출할 API가 필요합니다.
    console.log(searchText);
    setToastKey(toastKey + 1);
    setToastMessages([
      ...toastMessages,
      { key: toastKey, message: '검색 기능은 추후에 지원될 예정입니다.' },
    ]);
    setSearchText('');
  };

  return (
    <div css={searchBarCSS}>
      <input css={inputCSS} value={searchText} onChange={changeHandler} onKeyPress={keyPressHandler} type="text" placeholder="search" />
      <button css={buttonCSS} type="button" onClick={clickHandler}>
        <SearchIcon />
      </button>
      {toastMessages.map((toast) => (
        <Toast
          key={toast.key}
          message={toast.message}
          handleClose={() => handleToastClose(toast.key)}
        />
      ))}
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
