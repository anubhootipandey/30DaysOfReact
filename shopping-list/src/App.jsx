import { useState } from 'react';
import './App.css'

function Item({item, onRemoveItem}){
  return (
    <li>
      {item}
      <button className='delete' onClick={() => onRemoveItem(item)}>x</button>
    </li>
  );
};

function App() {
  const [items, setItems] = useState([]);

  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
     <h1>Shopping List</h1>
     <div className='shopping-list'>
      <h2>Items To Buy</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='item' placeholder='Add a new item' required />
        <button>Add</button>
      </form>
      <ul>
        {
          items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))
        }
      </ul>
     </div>
    </>
  );
};

export default App;
