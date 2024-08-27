import {useState} from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } ; 
    }

    const increment = () => {
        if (count <stock){
            setCount(count + 1);
        }
    }

    const addToCart = () => {
        alert (`Se agregaron ${count} items al carrito`)
    }


return (
    <div>


        <button onClick={decrement}>Decrementar</button>
        <p>COMPRAR {count} PRODUCTOS</p>
        <button onClick={increment}>Incrementar</button>
        <button onClick={addToCart}>Agregar al Carrito</button>


    </div>
    )
}

export default ItemCount