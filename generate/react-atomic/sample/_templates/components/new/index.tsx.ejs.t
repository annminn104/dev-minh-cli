---
to: src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import './index.scss';

export interface I<%= h.changeCase.pascalCase(name) %>Props {
  children?: React.ReactNode;
}

const <%= h.changeCase.pascalCase(name) %>: React.FC<I<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return <div>{children}</div>;
};

<%= h.changeCase.pascalCase(name) %>.defaultProps = {
  children: undefined
};

export default <%= h.changeCase.pascalCase(name) %>;
