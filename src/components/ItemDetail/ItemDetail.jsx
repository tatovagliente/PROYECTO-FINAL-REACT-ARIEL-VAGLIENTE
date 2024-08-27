import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre}/>
      <p>{product.detalle}</p>
      <p>CATEGORIA: {product.categoria}</p>
      <p>PRECIO: ${product.precio}</p>
      <p>STOCK: {product.stock}</p>

    <ItemCount initial={1} stock={product.stock}/>

    </div>
  )
}

export default ItemDetail