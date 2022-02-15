import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
