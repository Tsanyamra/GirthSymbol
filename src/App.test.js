// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GirthSymbol title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GirthSymbol/i);
    expect(titleElement).toBeInTheDocument();
});
