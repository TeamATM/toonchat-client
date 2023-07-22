import { FC, ReactNode } from 'react';

type titleTextProps = {
  children: ReactNode
}

const TitleText: FC<titleTextProps> = ({ children }) => (
  <span>{ children }</span>
);

export default TitleText;
