
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders About component on default route', async () => {
  await act(async () => {
    render(<App />);
  });

  // Check for the presence of the About component content
  const aboutText = screen.getByText(/Passionate software developer/i); // Adjust this text to match actual content in About component
  expect(aboutText).toBeInTheDocument();
});