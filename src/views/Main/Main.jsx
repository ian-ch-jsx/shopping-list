import { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';
import { useList } from '../../context/ListContext';
import './Main.css';

export default function Main() {
  const { items, handleAddItem, handleDeleteItem, handleEditItem } = useList();

  return (
    <div className="list">
      <h1>Shopping List</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} onEditItem={handleEditItem} onDeleteItem={handleDeleteItem} />
    </div>
  );
}
