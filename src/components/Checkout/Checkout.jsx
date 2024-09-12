import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from 'firebase/firestore';


const Checkout = () => {
  const {cart, getTotal, getTotalProducts, clearCart} = useContext(CartContext);
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono,setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');





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
    <div>
      <h2>TU CARRITO:</h2>
      <div>
      {cart.map((product, index) => (
        <div key={product.product.id || index}>
          <p>{product.product.nombre}</p>
          <img 
            src={product.product.imagen} 
            alt={product.product.nombre}   
            style={{ width: '100px', height: 'auto' }}
          />
          <p>{product.product.precio}</p>
          <hr />
        </div>
        
))}
      </div>
      <h2>Ingresa tu datos</h2>
      <form onSubmit={handleForm}>
  <div>
    <label htmlFor='nombre'>Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      onChange={(e) => setNombre(e.target.value)}
    />
  </div>

  <div>
    <label htmlFor='apellido'>Apellido:</label>
    <input
      type="text"
      id="apellido"
      name="apellido"
      onChange={(e) => setApellido(e.target.value)}
    />
  </div>

  <div>
    <label htmlFor='telefono'>Telefono:</label>
    <input
      type="number"
      id="telefono"
      name="telefono"
      onChange={(e) => setTelefono(e.target.value)}
    />
  </div>

  <div>
    <label htmlFor='email'>Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div>
    <label htmlFor='emailConfirmacion'>Email de Confirmación:</label>
    <input
      type="email"
      id="emailConfirmacion"
      name="emailConfirmacion"
      onChange={(e) => setEmailConfirmacion(e.target.value)}
    />
  </div>

  <button type="submit">FINALIZAR COMPRA</button>

  {error && <p>{error}</p>}
  {orderId && (
    <p>Gracias por su Compra! Tu numero de orden es: {orderId}{""}</p>
  )}
</form>
    </div>
  )
}

export default Checkout