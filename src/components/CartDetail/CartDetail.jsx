import { CartContext } from "../../context/CartContext/CartProvider"
import { useContext } from "react"
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CartDetail = ({cart}) => {
    const {getTotal,getTotalProducts,removeItem, clearCart, buy} = useContext(CartContext);

    const handleClearCart = () => {
      clearCart();
      toast.success('Carrito vaciado exitosamente');
    };

  return (
    <div>
        <h2>Carrito de Compras</h2>

        {cart.map((item) => (
    <div key={item.product.id}>
        <h3>{item.product.nombre}</h3>
        <img src={item.product.imagen} alt={item.product.nombre} />
        <p>CANTIDAD: {item.quantity}</p>
        <p>PRECIO: {item.product.precio}</p>
        
        <button onClick={()=> removeItem(item.product.id)}>ELIMINAR</button>
    </div>
    ))}

    <h3>Total Productos:{getTotalProducts()}</h3>
    <h3>TOTAL A PAGAR: ${getTotal()}</h3>
    <button onClick={handleClearCart}>Vaciar Carrito</button>
  <Link to={"/checkout"}>COMPRAR</Link>

    </div>
  )
}

export default CartDetail