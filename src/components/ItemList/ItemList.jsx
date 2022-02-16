import Item from '../Item/Item';

export default function ItemList({ onEditItem, onDeleteItem, items }) {
  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onEdit={onEditItem} onDelete={onDeleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
