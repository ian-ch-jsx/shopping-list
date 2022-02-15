import { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const initialItems = [
  { id: 0, text: 'kittens', done: false },
  { id: 1, text: 'puppies', done: false },
];

// create itemReducer
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

export default function Main() {
  //Use reducer takes a reducer function and the initial state
  const [items, dispatch] = useReducer(itemReducer, initialItems);
  //handleAddItem dispatch
  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };
  //handleChangeItem
  const handleChangeItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };
  //handleDelete
  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };
  return (
    <>
      <h1>Shopping List!</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
    </>
  );
}
