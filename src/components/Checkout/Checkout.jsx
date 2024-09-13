import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from 'firebase/firestore';
import './Checkout.css';

const Checkout = () => {
  const {cart, getTotal, getTotalProducts, clearCart} = useContext(CartContext);
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono,setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');


  const totalAPagar = () => {
    return cart.reduce((acc, product) => acc + product.product.precio * product.quantity, 0);
  };


  const handleForm = (e) =>{
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion){
      setError('Por favor, complete todos los campos');
      return;
    }

    if (email !== emailConfirmacion){
      setError('Los emails no coinciden');
      return;
    }
    if (telefono.length < 10){
      setError('El telefono debe tener al menos 10 digitos');
      return;
    }

    const db = getFirestore();
    const order = {
      items: cart.map((product) => ({
        id: product.product.id,
        name: product.product.nombre,
        quantity: product.quantity,
        stock: product.product.stock,
      })),
      total: getTotal(),
      date: new Date(),
      nombre,
      apellido,
      telefono,
      email,
  };

  Promise.all(
    order.items.map(async (productOrder) => {
      const productRef = doc(db, "item", productOrder.id);
      const productDoc = await getDoc(productRef);
      const stock = productDoc.data().stock;

      await updateDoc(productRef, {
        stock: stock - productOrder.quantity,
      });
    })
  ).then(() => {
      addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.error("Error añadiendo el doc: ", error);
        setError('Error al crear la orden');
        });
  })
  .catch((error) => {
    console.log("Error actualizando el stock", error);
    setError("No se puede actualizar el stock, intentelo nuevamente");
  });
};


return (
  <div className="checkout-container">
    <h2>TU CARRITO:</h2>
    <div>
      {cart.map((product, index) => (
        <div key={product.product.id || index} className="product-item">
          <img
            src={product.product.imagen}
            alt={product.product.nombre}
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">PRODUCTO: {product.product.nombre}</p>
            <p className="product-price">PRECIO POR UNIDAD: ${product.product.precio}</p>
            <p className="subtotal">
              SUBTOTAL: ${(product.product.precio * product.quantity)}
            </p>
          </div>
        </div>
      ))}

      <div>
        <h3 className="total-pagar">TOTAL A PAGAR: ${totalAPagar()}</h3>
        </div>


      </div>
      <h2>Ingresa tu datos</h2>
      <form onSubmit={handleForm}>
      <div className="form-group">
    <label htmlFor='nombre'>Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      onChange={(e) => setNombre(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor='apellido'>Apellido:</label>
    <input
      type="text"
      id="apellido"
      name="apellido"
      onChange={(e) => setApellido(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor='telefono'>Telefono:</label>
    <input
      type="number"
      id="telefono"
      name="telefono"
      onChange={(e) => setTelefono(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor='email'>Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor='emailConfirmacion'>Email de Confirmación:</label>
    <input
      type="email"
      id="emailConfirmacion"
      name="emailConfirmacion"
      onChange={(e) => setEmailConfirmacion(e.target.value)}
    />
  </div>

  <button type="submit">FINALIZAR COMPRA</button>

  {error && <p className="error-message">{error}</p>}
  {orderId && (
    <p className="success-message">Gracias por su Compra! Tu numero de orden es: {orderId}{""}</p>
  )}
</form>
    </div>
  )
}

export default Checkout