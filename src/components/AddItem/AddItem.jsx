import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  //newitem usestate
  const [newItem, setNewItem] = useState('');

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    onAddItem(newItem);
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
