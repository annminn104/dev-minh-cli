---
to: src/pages/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import './index.scss';

const <%= h.changeCase.pascalCase(name) %>: React.FC = () => {
  return <div>Page <%= h.changeCase.pascalCase(name) %></div>;
};

export default <%= h.changeCase.pascalCase(name) %>;
