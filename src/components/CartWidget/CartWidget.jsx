import "./CartWidget.css"
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from '../../context/CartContext/CartProvider'

const CartWidget = () => {
  const {getTotalProducts} = useContext(CartContext);

  return (
    <div className="nav-cart">
        <BsCart2 />
        {getTotalProducts() === 0 ? null : getTotalProducts()}
    </div>
  )
}

export default CartWidget