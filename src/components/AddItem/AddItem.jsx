import { useState } from 'react';

export default function AddItem() {
  //newitem usestate
  const [newItem, setNewItem] = useState('');

  //handleSubmit

  return (
    <div>
      <form>
        <input placeholder="item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
