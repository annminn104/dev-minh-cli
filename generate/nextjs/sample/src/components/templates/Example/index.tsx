import React from 'react';
import styles from './index.module.scss';

export interface IExampleProps {
  children?: React.ReactNode;
}

const Example: React.FC<IExampleProps> = ({ children }) => {
  return <div className={styles.example}>{children}</div>;
};

Example.defaultProps = {
  children: undefined
};

export default Example;
