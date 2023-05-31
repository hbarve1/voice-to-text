import { render } from '@testing-library/react';

import ReactSvg from './react-svg';

describe('ReactSvg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSvg />);
    expect(baseElement).toBeTruthy();
  });
});
