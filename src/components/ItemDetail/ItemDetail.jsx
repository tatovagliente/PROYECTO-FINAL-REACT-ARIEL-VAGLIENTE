import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

  const {addItem} = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const onAdd = (quantity) => {
    addItem(product, quantity);
    setShowItemCount(false);
  };

  return (
    <div className="item-detail">
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre}/>
      <p>{product.detalle}</p>
      <p>CATEGORIA: {product.categoria}</p>
      <p className="price">PRECIO: ${product.precio}</p>
      {product.stock === 0 ? (
        <p>STOCK: Agotado</p>
      ) : (
        <p className="stock">STOCK: {product.stock}</p>
      )}

      {product.stock === 0 ? (
        <p>Producto no disponible</p>
      ) : (
        showItemCount ? (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>) 
          : (<Link to='/cart'>Terminar mi Compra</Link>)
      )}
    </div>
  )
}

export default ItemDetail