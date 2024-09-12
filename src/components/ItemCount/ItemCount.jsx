import {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial,stock,onAdd}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        } ; 
    }

    const increment = () => {
        if (count <stock){
            setCount(count + 1);
        }
    }

return (
    <div className="item-count">


        <button className="btn-decrement" onClick={decrement}>-</button>
        <p>COMPRAR {count} PRODUCTOS</p>
        <button className="btn-increment" onClick={increment}>+</button>
        <button className="btn-add" onClick={()=> onAdd(count)}>Agregar al Carrito</button>


    </div>
    )
}

export default ItemCount