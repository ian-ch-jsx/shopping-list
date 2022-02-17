import { useState } from 'react';

export default function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;

  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onEdit({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button onClick={() => setIsEditing(false)} aria-label={`update ${item.text}`}>
          update
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button onClick={() => setIsEditing(true)} aria-label={`edit ${item.text}`}>
          Edit
        </button>
      </>
    );
  }
  return (
    <span className="item">
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
      <button type="button" onClick={() => onDelete(item.id)} aria-label={`delete ${item.text}`}>
        Delete
      </button>
    </span>
  );
}
