import App from './App';

import React from 'react';
import { render, screen } from '@testing-library/react';

describe('app', () => {
  it('renders learn react link', () => {
    expect.assertions(1);

    render(<App />);
    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });
});
