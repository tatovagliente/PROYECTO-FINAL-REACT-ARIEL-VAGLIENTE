# E-Commerce Tienda de Ropa Masculina CERCENASCO

## Descripción

Este es un proyecto de e-commerce para una tienda de ropa masculina llamada "CERCENASCO", desarrollado con React durante el curso de React de CoderHouse. La aplicación permite a los usuarios navegar por una variedad de productos, ver detalles de los productos, agregarlos al carrito, y proceder a la generacion de una orden de compra. También incluye funcionalidades para manejar el carrito de compras, aplicar el modo oscuro, y gestionar el estado del tema.

## Características

- Navegación entre diferentes categorías de productos.
- Detalles del producto con imagen, nombre, precio y stock.
- Contador para ajustar la cantidad de productos antes de agregar al carrito.
- Visualización y gestión del carrito de compras.
- Implementación de modo oscuro (Dark Mode) con cambio dinámico.
- Integración con Firebase Firestore para obtener los productos.

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tatovagliente/PROYECTO-FINAL-REACT-ARIEL-VAGLIENTE
    ```

2. **Navega a la carpeta del proyecto:**

    ```bash
    cd https://github.com/tatovagliente/PROYECTO-FINAL-REACT-ARIEL-VAGLIENTE
    ```

3. **Instala las dependencias:**

    ```bash
    npm install
    ```

4. **Configura Firebase:**

    - Crea un proyecto en Firebase.
    - Configura Firestore y obtiene tus credenciales.
    - Añade tus credenciales a un archivo `.env` en la raíz del proyecto.

    ```.env
      apiKey: "AIzaSyDraHzVeUsyDdEYHIKX508ikf00lhzb4G8",
      authDomain: "cercenasco-tienda-moda.firebaseapp.com",
      projectId: "cercenasco-tienda-moda",
      storageBucket: "cercenasco-tienda-moda.appspot.com",
      messagingSenderId: "864537122540",
      appId: "1:864537122540:web:dfc4fd60c8aaa6577637c9"
;
    ```

5. **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- `src/` - Carpeta principal con los archivos de código fuente.
  - `components/` - Componentes reutilizables de la aplicación.
    - `CartDetail/` - Detalles del carrito de compras.
    - `ItemCount/` - Contador de cantidad para los productos.
    - `ItemDetail/` - Detalles del producto.
    - `Navbar/` - Barra de navegación.
    - `Footer/` - Pie de página.
  - `context/` - Contextos para el manejo de estado.
    - `CartContext/` - Contexto para el carrito de compras.
    - `ThemeContext/` - Contexto para el tema (modo claro/oscuro).
  - `pages/` - Componentes de páginas principales.
    - `ItemListContainer/` - Lista de productos.
    - `ItemDetailContainer/` - Contenedor de detalles del producto.
    - `Checkout/` - Página de checkout.
    - `Error/` - Página de error 404.
  - `App.js` - Componente principal de la aplicación.
  - `index.js` - Punto de entrada de la aplicación.
  - `App.css` - Estilos globales de la aplicación.
  
## Uso

- **Navegar**: Utiliza la barra de navegación para explorar las categorías de productos.
- **Detalles del Producto**: Haz clic en un producto para ver más detalles y ajusta la cantidad con el contador.
- **Carrito**: Agrega productos al carrito y visualízalos en la página de carrito.
- **Checkout**: Procede a la compra desde el carrito.
- **Modo Oscuro**: Cambia entre modo claro y oscuro usando el botón en la barra de navegación.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un [issue](https://github.com/tatovagliente/PROYECTO-FINAL-REACT-ARIEL-VAGLIENTE/issues) o envía un [pull request](https://github.com/tatovagliente/PROYECTO-FINAL-REACT-ARIEL-VAGLIENTE/pulls) para cualquier mejora o corrección.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

## Contacto

- **Nombre:** ARIEL ROMAN VAGLIENTE
- **Correo Electrónico:** ariel.vagliente@yahoo.com.ar / ariel.vagliente@gmail.com
- **GitHub:** [tatovagliente](https://github.com/tatovagliente)