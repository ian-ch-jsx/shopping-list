import { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  console.log('item', item);
  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button onClick={() => setIsEditing(false)}>update</button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div>
      {itemContent}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
