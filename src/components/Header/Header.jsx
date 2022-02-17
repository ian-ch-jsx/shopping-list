import './Header.css';
import { useList } from '../../context/ListContext';

export default function Header() {
  const { items } = useList();
  const message =
    items.length === 1 ? `${items.length} item in cart` : `${items.length} items in cart`;
  return (
    <>
      <header>
        <div>
          <p>{message}</p>
        </div>
      </header>
    </>
  );
}
