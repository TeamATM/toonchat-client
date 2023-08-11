/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';
import '@testing-library/jest-dom/extend-expect';

describe('<Dialog />', () => {
  it('자식 컴포넌트가 랜더링 되는지', () => {
    const { getByText } = render(<Dialog theme="green" closeModal={() => {}}>Test Dialog</Dialog>);
    const dialogElement = getByText('Test Dialog');
    expect(dialogElement).toBeInTheDocument();
  });

  it('버튼을 누르면 모달이 닫히는지', () => {
    const closeModalMock = jest.fn();
    const { getByText } = render(<Dialog theme="green" closeModal={closeModalMock}>Test Dialog</Dialog>);
    const closeButton = getByText('ENTER');

    fireEvent.click(closeButton);
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('Backdrop 클릭시 모달이 닫히는지', () => {
    const closeModalMock = jest.fn();
    const { getByLabelText } = render(<Dialog theme="green" closeModal={closeModalMock}>Test Dialog</Dialog>);
    const backdrop = getByLabelText('close modal');

    fireEvent.click(backdrop);
    expect(closeModalMock).toHaveBeenCalled();
  });

  // Focus 관리 검증
  it('모달창이 뜨면 Focus가 되는지', () => {
    const { getByText } = render(<Dialog theme="green" closeModal={() => {}}>Test Dialog</Dialog>);
    const closeButton = getByText('ENTER');

    expect(document.activeElement).toBe(closeButton);
  });
});
