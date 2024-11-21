import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About component on default route', () => {
  render(<App />);

  // Check for the presence of the About component content
  const aboutText = screen.getByText(/Hi! I'm An Nguyen/i); // Adjust this text to match actual content in About component
  expect(aboutText).toBeInTheDocument();
});