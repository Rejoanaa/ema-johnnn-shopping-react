
import { useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { addToDb } from './utilities/fakedb';

function App() {
  const [cart, setCart] = useState([])
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(product)
    addToDb(product.key)
  }
  return (
    <div>
      <Header></Header>
      <Shop handleAddToCart={handleAddToCart} cart={cart} setCart={setCart}></Shop>
    </div>
  );
}

export default App;
