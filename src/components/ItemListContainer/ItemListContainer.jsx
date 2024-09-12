import "./ItemListContainer.css"
import {useState, useEffect} from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import { collection,getDocs, getFirestore,where, query } from "firebase/firestore"


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const misProductos = categoriaId ? query(collection(db,"item"), where("categoria","==",categoriaId)) : collection(db, "item");

    getDocs(misProductos)
    .then((res) => {
      const nuevosProductos = res.docs.map((doc) => {
        const data = doc.data();
        return {id : doc.id, ...data};
        });
        setProducts(nuevosProductos);
      })
      .catch((error) => console.log("Error buscando los productos", error))
        .finally (() => setLoading(false));

  }, [categoriaId])

return (
  <div className="container">

    <h1>{greeting}</h1>

    {loading ? <Spinner/> : <ItemList products={products} />}
    
  </div>
)
}

export default ItemListContainer