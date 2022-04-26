import { render, screen } from '@testing-library/react';
import App from './App';
import MainView from './components/MainView'

test('renders learn react link', () => {
  render(<App />);
  expect(App).find(MainView).toHaveTheLength(1);
});
