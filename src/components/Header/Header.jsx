import './Header.css';
import { useList } from '../../context/ListContext';

export default function Header() {
  const { items, handleClearItems } = useList();

  const message =
    items.length === 1 ? `${items.length} item in cart` : `${items.length} items in cart`;
  return (
    <>
      <header>
        <div>
          <p>{message}</p>
          <button onClick={handleClearItems} aria-label="clear cart">
            clear cart
          </button>
        </div>
      </header>
    </>
  );
}
