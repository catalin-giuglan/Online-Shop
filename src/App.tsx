import { useState } from 'react';
import './App.css';
import Navbar from './Navbar.tsx';
// import CreateButton from './MyButton.tsx'
// import CreateSearch from './Searchbar.tsx'
import CreateShopCart from './ShoppingCart.tsx';
import Product from './Product.tsx';
import CreateAddToCart from './AddToCart.tsx';

function App() {
  const [cartCount, setCartCount] = useState(0);
  // const [search, setSearch] = useState('');
  const [items, setItems] = useState<{ name: string; price: number; quantity: number }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (name: string, price: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { name, price, quantity: 1 }];
      }
    });

    setCartCount(cartCount + 1);
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const handleRemoveFromCart = (name: string, price: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevItems.map((item) =>
            item.name === name ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevItems.filter((item) => item.name !== name);
        }
      }
      return prevItems;
    });

    setCartCount(cartCount - 1);
    setTotalPrice((prevTotal) => prevTotal - price);
  };

  // const handleSearch = (e: any) => {
  //   setSearch(e.target.value);
  // };

  return (
    <>
      <Navbar />
      <h1 style={{ position: 'fixed', top: 250, left: 1, padding: '10px 20px', fontSize: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', gap: 30, flexDirection: 'row', alignItems: 'flex-start', width: 'fit-content'}}>
          <div className="product-container">
            <Product name="Nintendo Switch" price={299.99} description="A portable gaming system" images={["./switch.jpg"]} />
            <CreateAddToCart onClick={() => handleAddToCart("Nintendo Switch", 299.99)} image="./add-cart.png" />
          </div>
          <div className="product-container">
            <Product name="Google Pixel Buds Pro" price={149.99} description="The latest Google earbuds" images={["./casti_2.jpeg"]} />
            <CreateAddToCart onClick={() => handleAddToCart("Google Pixel Buds Pro", 149.99)} image="./add-cart.png" />
          </div>
          <div className="product-container">
            <Product name="AK-47 Ice Coaled" price={2700.00} description="A Counter-Strike classic" images={["./ak_4.jpeg"]} />
            <CreateAddToCart onClick={() => handleAddToCart("AK-47 Ice Coaled", 2700.00)} image="./add-cart.png" />
          </div>
        </div>
        <div className="shopping-cart-container">
          <CreateShopCart count={cartCount} totalPrice={totalPrice}/>
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 10}}>
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
                <button onClick={() => handleRemoveFromCart(item.name, item.price)} style={{fontSize: '13px' }}>
                  <span><img src = "./delete-cart.png" style = {{ width: 40, height: 40 }}/></span>
                  <span>{item.price * item.quantity}$</span>
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </div>
      </h1>
    </>
  );
}

export default App;
