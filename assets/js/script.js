
//1. Agrega el evento de JavaScript que reacciona ante un clic en el elemento HTML que corresponde.
// se conecta al final del body con un script
//2. Aplicar los querySelector() e innerHTML() de manera correcta para modificar los elementos del DOM.

//3. Implementa la lógica para modificar total a pagar en función de la cantidad.
//4. Hacer funcionar los botones de + y - para aumentar y disminuir la cantidad de productos.










document.addEventListener('DOMContentLoaded', function () {

  let precio = 400000;
  let precioSpan = document.querySelector(".precio-base");
  precioSpan.innerHTML = precio;


  let cantidadSpan = document.querySelector('.cantidad');
  let totalSpan = document.querySelector('.valor-total');

  document.querySelector('.incrementar').addEventListener('click', function () {
    actualizarCantidad(1);
  });


  document.querySelector('.disminuir').addEventListener('click', function () {
    actualizarCantidad(-1);
  });



  function actualizarCantidad(cambio) {
    let cantidad = parseInt(cantidadSpan.innerHTML);


    if (!isNaN(cantidad)) {
      cantidad += cambio;
      cantidad = Math.max(cantidad, 0);
      cantidadSpan.innerHTML = cantidad;
      let total = cantidad * precio;
      totalSpan.innerHTML = total;
    }
  }
});










