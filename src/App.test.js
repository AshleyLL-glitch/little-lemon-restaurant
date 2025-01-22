import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-router-dom to avoid issues with routing in tests
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

test('renders the navigation bar', () => {
  render(<App />);
  const navElement = screen.getByText(/home/i);
  expect(navElement).toBeInTheDocument();
});

test('renders the Book a Table link', () => {
  render(<App />);
  const linkElement = screen.getByText(/book a table/i);
  expect(linkElement).toBeInTheDocument();
});

