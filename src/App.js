import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
function App() {

  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'iiirrrma REACJS', precio: 20},
    { id: 2, nombre: 'pera REACJS', precio: 30},
    { id: 4, nombre: 'manzana REACJS', precio: 10},
    { id: 5, nombre: 'melon REACJS', precio: 15},
    { id: 7, nombre: 'zanahoria REACJS', precio: 20},
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([

  ]);
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
         <Header
         titulo ='Tienda Virtual Prueba'/>
         <h1>Lista de productos </h1>
         {productos.map(producto => (
           <Producto 
            key={producto.id} 
            producto={producto}
            carrito={carrito}
            agregarProducto={agregarProducto}
            productos={productos}
          />
         ))}
         <Carrito carrito={carrito} agregarProducto={agregarProducto}/>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
