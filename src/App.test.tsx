import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders sign up button', async () => {
    render(<App />);
    const buttonElement = await screen.findByText('Sign Up');
    expect(buttonElement).toBeInTheDocument();
  });
});
