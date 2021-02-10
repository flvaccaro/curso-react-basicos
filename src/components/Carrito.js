import React from "react"
import "./carrito.css"
import Producto from "./Producto"
const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2>Tu carrito de compras</h2>
    {carrito.length === 0 ? (
      <p>No hay productos en el carrito</p>
    ) : (
      carrito.map((producto) => (
        <Producto
          key={producto.id}
          agregarProducto={agregarProducto}
          producto={producto}
          carrito={carrito}
        />
      ))
    )}
  </div>
)

export default Carrito
