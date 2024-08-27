import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (

    <Link to={`/item/${item.id}`}>
        <div key={item.id} className="card">
          <h2>{item.nombre}</h2>
        <img src={item.imagen} alt={item.nombre}/>
    </div>
    </Link>

  )
}

export default Item