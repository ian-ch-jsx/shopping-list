import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem('');
  };

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          aria-label="add item"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
