import { render } from '@testing-library/react';
import color from '@/styles/color';
import Button from './Button';
import '@testing-library/jest-dom/extend-expect';

describe('<Button />', () => {
  it('button props 테스트 : children props', () => {
    const { getByText } = render(<Button theme="green">Test Button</Button>);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('button 렌더링 및 스타일 테스트 : green theme', () => {
    const { getByText } = render(<Button theme="green">Test Button</Button>);
    const buttonElement = getByText('Test Button');

    expect(buttonElement).toHaveStyle({
      backgroundColor: color.darkGreen,
      color: color.offWhite,
    });
  });

  it('button 렌더링 및 스타일 테스트 : white theme', () => {
    const { getByText } = render(<Button theme="white">Test Button</Button>);
    const buttonElement = getByText('Test Button');

    expect(buttonElement).toHaveStyle({
      backgroundColor: color.offWhite,
      color: color.greenGray,
    });
  });
});
