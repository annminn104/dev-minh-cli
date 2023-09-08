---
to:  src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.spec.tsx
---

import { render } from '@testing-library/react';

import <%= h.changeCase.pascalCase(name) %> from './index';

describe('<<%= h.changeCase.pascalCase(name) %> />', () => {
  it('should render the heading', () => {
    render(<<%= h.changeCase.pascalCase(name) %> />);
  });
});
