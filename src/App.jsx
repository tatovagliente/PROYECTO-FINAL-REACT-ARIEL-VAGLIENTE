import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import ThemeProvider from './context/ThemeContext/ThemeProvider';
import CartProvider from './context/CartContext/CartProvider';
import Cart from './components/Cart/Cart';


const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
