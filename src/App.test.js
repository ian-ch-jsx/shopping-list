import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders a list of items', () => {
  render(<App />);
  const listItem = screen.getAllByRole('listitem');
  expect(listItem[0]).toBeInTheDocument();
});

test('items can be added, deleted, and edited', () => {
  render(<App />);

  const addButton = screen.getByRole('button', { name: /add/i });
  const input = screen.getByRole('textbox');

  userEvent.type(input, 'zebra');
  userEvent.click(addButton);

  const item = screen.getByText(/zebra/i);
  expect(item).toBeInTheDocument();

  const deleteButton = screen.getByLabelText(/delete zebra/i);
  const zebra = screen.getByText(/zebra/i);

  userEvent.click(deleteButton);

  expect(zebra).not.toBeInTheDocument();

  const editButton = screen.getByLabelText(/edit Ice Cream 🍨/i);

  userEvent.click(editButton);

  const editInput = screen.getByDisplayValue(/Ice Cream 🍨/i);
  const updateButton = screen.getByRole('button', { name: /update/i });

  userEvent.type(editInput, '2');
  userEvent.click(updateButton);

  const newText = screen.getByText(/Ice Cream 🍨2/i);

  expect(newText).toBeInTheDocument();
});

test('clear cart clears the cart', () => {
  render(<App />);

  const clearButton = screen.getByLabelText(/clear cart/i);
  const item = screen.getByText(/Ice Cream 🍨/i);

  userEvent.click(clearButton);

  expect(item).not.toBeInTheDocument();
});
