import React from 'react';
import './index.scss';

export interface IExampleProps {
  children?: React.ReactNode;
}

const Example: React.FC<IExampleProps> = ({ children }) => {
  return <div>{children}</div>;
};

Example.defaultProps = {
  children: undefined
};

export default Example;
