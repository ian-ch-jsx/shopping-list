import { useState } from 'react';

export default function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;

  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          data-testid="help"
          onChange={(e) => {
            onEdit({
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
        <button onClick={() => setIsEditing(true)} data-testid={item.text}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onEdit({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button type="button" onClick={() => onDelete(item.id)} data-testid={item.id}>
        Delete
      </button>
    </div>
  );
}
