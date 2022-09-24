import { useState } from 'react';
import './App.css';
import FetchProducts from './components/FetchProducts/FetchProducts';
import Header from './components/Header/Header';
import { setLocalStorage } from './utlities';

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  

  const buyNow = (newPrice, id) => {
    setCount(count => count + 1);
    setPrice(newPrice + price)
    setLocalStorage(id)
  }
  // const removeIn = (id) => {
  //   removeTarget(id);
  // }
  
  return (
    <div className="App">
      <Header count={count} price={price}></Header>
      <FetchProducts buyNow={buyNow} ></FetchProducts>
    </div>
  );
}

export default App;
