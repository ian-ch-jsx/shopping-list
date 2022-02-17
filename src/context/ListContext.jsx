import { createContext, useContext, useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'Chicken 🍗', done: false },
  { id: 1, text: 'Ice Cream 🍨', done: false },
];

function itemReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          complete: false,
        },
      ];
    }
    case 'changed': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
export const ListContext = createContext();

export default function ListProvider({ children }) {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleEditItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <ListContext.Provider value={{ items, handleAddItem, handleEditItem, handleDeleteItem }}>
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => {
  const context = useContext(ListContext);

  if (!context)
    throw new Error('You must wrap your component with a ListProvider in order to call useList');

  return context;
};
