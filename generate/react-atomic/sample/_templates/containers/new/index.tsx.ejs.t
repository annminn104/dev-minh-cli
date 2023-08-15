---
to: src/containers/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';


interface I<%= h.changeCase.pascalCase(name) %>Props {
  children?: React.ReactNode;
}

const <%= h.changeCase.pascalCase(name) %>: React.FC<I<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return (
    <div>
      <div>Container <%= h.changeCase.pascalCase(name) %> is working file!</div>
      {children}
      <Outlet />
    </div>
  );
};

<%= h.changeCase.pascalCase(name) %>.defaultProps = {
  children: undefined
};

export default React.memo(<%= h.changeCase.pascalCase(name) %>);
