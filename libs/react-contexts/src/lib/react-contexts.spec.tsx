import { render } from '@testing-library/react';

import ReactContexts from './react-contexts';

describe('ReactContexts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactContexts />);
    expect(baseElement).toBeTruthy();
  });
});
