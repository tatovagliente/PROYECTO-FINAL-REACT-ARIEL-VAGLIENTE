import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

  const {addItem} = useContext(CartContext);
  const onAdd = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <div>
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre}/>
      <p>{product.detalle}</p>
      <p>CATEGORIA: {product.categoria}</p>
      <p>PRECIO: ${product.precio}</p>
      <p>STOCK: {product.stock}</p>

      <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>

      <Link to='/cart'>Terminar mi Compra</Link>
    </div>
  )
}

export default ItemDetail