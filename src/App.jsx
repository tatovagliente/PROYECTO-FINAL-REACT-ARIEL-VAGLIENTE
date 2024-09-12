import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import ThemeProvider from './context/ThemeContext/ThemeProvider';
import CartProvider from './context/CartContext/CartProvider';
import Cart from './components/Cart/Cart';
import {db} from "./main";
import {collection, getDocs, getFirestore } from 'firebase/firestore';
import Checkout from './components/Checkout/Checkout';

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect (() => {
  const db = getFirestore();

  const itemsCollection = collection(db, "item");

  getDocs(itemsCollection).then((snapshot) => {
    setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
  });

  }, []);
console.log(products);


  return (
    <>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
