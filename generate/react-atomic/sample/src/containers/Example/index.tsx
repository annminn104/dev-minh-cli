import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';


interface IExampleProps {
  children?: React.ReactNode;
}

const Example: React.FC<IExampleProps> = ({ children }) => {
  return (
    <div>
      <div>Container Example is working file!</div>
      {children}
      <Outlet />
    </div>
  );
};

Example.defaultProps = {
  children: undefined
};

export default React.memo(Example);
