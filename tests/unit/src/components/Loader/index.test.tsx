import { render, screen } from '@testing-library/react';

import { Loader } from 'components';

describe('Render Component', () => {
  test('renders the Container with data-testid="loader"', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
