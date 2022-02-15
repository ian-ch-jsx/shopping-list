import Item from '../Item/Item';

export default function ItemList({ onChangeItem, onDeleteItem, items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onChange={onChangeItem} onDelete={onDeleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
