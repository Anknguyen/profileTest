import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders About component on default route', async () => {
  await act(async () => {
    render(<App />);
  });

  // Check for the presence of the About component content
  const aboutHeading = screen.getByRole('heading', { name: /Passionate software developer/i });
  expect(aboutHeading).toBeInTheDocument();
});