import { render } from '@testing-library/react';

import Example from './index';

describe('<Example />', () => {
  it('should render the heading', () => {
    render(<Example />);
  });
});
