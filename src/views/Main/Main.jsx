import { useReducer, useState } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

// create itemReducer

export default function Main() {
  //Use reducer takes a reducer function and the initial state

  //handleAddItem dispatch

  //handleChangeItem

  //handleDelete
  return (
    <>
      <h1>Shopping List!</h1>
      <AddItem />
      <ItemList />
    </>
  );
}
