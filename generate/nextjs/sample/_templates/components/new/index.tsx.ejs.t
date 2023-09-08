---
to: src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import styles from './index.module.scss';

export interface I<%= h.changeCase.pascalCase(name) %>Props {
  children?: React.ReactNode;
}

const <%= h.changeCase.pascalCase(name) %>: React.FC<I<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return <div className={styles.<%= h.changeCase.camel(name) %>}>{children}</div>;
};

<%= h.changeCase.pascalCase(name) %>.defaultProps = {
  children: undefined
};

export default <%= h.changeCase.pascalCase(name) %>;
