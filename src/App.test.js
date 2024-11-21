import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component with expected content', () => {
  render(<About />);
  
  // Check for the presence of the Typewriter text
  const typewriterText = screen.getByText(/Hi! I'm An Nguyen/i);
  expect(typewriterText).toBeInTheDocument();
  
  // Check for the presence of the "View Projects" button
  const viewProjectsButton = screen.getByRole('button', { name: /View Projects/i });
  expect(viewProjectsButton).toBeInTheDocument();
});