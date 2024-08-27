import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState("")

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json')
        const data = await response.json()
        const newProduct = data.find (p=> p.id === Number(id))
        setProduct(newProduct)
      } catch (error) {
        console.log(error)
      }
    }
  
    fetchData()
  }, [id])

  return (
    <div>

      {product ? <ItemDetail product={product} /> : <Spinner />}

      
    </div>
  )
}

export default ItemDetailContainer