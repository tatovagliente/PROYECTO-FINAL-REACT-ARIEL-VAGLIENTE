import {useState, createContext} from "react";

export const CartContext = createContext(); 

export const  CartProvider = ({children}) => {

// FUNCIONALIDADES DEL CARRITO
  const [cart, setCart] = useState([]);

    // AGREGAR AL CARRITO
    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            setCart(
                cart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };

  // VER SI ESTÁ EN EL CARRITO
  const isInCart = (productId) => {
    return cart.some((item) => item.product.id === productId);
};


  // LIMPIAR EL CARRITO
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL DEL CARRITO
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.precio * item.quantity, 0);
    };

  // TOTAL DE PRODUCTOS EN EL CARRITO
  const getTotalProducts = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // ELIMINAR PRODUCTO DEL CARRITO
  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            clearCart,
            getTotal,
            getTotalProducts,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;