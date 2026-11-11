function calcular() {
  let productoInput = document.getElementById("producto");
  let productoTexto = productoInput.value.trim().toLowerCase();

  if (productoTexto === "") {
    alert("Ingrese el producto");
    productoInput.style.borderColor = "red";
    return;
  } else {
    productoInput.style.borderColor = "green";
  }

  let cantidadInput = document.getElementById("cantidad");
  let cantidad = parseInt(cantidadInput.value);

  if (isNaN(cantidad)) {
    alert("Ingrese la cantidad");
    cantidadInput.style.borderColor = "red";
    return;
  } else {
    cantidadInput.style.borderColor = "green";
  }

  if (cantidad <= 0) {
    alert("Cantidad inválida");
    cantidadInput.style.borderColor = "red";
    return;
  } else {
    cantidadInput.style.borderColor = "green";
  }

  let precioInput = document.getElementById("precio");
  let precio = parseFloat(precioInput.value);

  if (isNaN(precio)) {
    alert("Ingrese el precio");
    precioInput.style.borderColor = "red";
    return;
  } else if (precio <= 0) {
    alert("Precio inválido");
    precioInput.style.borderColor = "red";
    return;
  } else {
    precioInput.style.borderColor = "green";
  }

  // 1. Mostrar el subtotal
  let subtotal = cantidad * precio;
  document.getElementById("subtotal").value = subtotal.toLocaleString();

  // 2. Calcular Descuento
  let descuento = 0;

  if (subtotal < 100000) {
    descuento = 0;
  } else if (subtotal < 300000) {
    descuento = subtotal * 0.1;
  } else if (subtotal < 500000) {
    descuento = subtotal * 0.2;
  } else {
    descuento = subtotal * 0.3;
  }

  document.getElementById("descuento").value = descuento.toLocaleString();

  // 3. Calcular IVA (19% excluyendo huevo, leche y pan)
  let iva = 0;

  if (
    productoTexto !== "huevo" &&
    productoTexto !== "huevos" &&
    productoTexto !== "leche" &&
    productoTexto !== "pan"
  ) {
    iva = subtotal * 0.19;
  }

  document.getElementById("iva").value = iva.toLocaleString();

  // 4. Calcular y mostrar el Total a pagar
  let total = subtotal - descuento + iva;
  document.getElementById("total").value = total.toLocaleString();

  document.getElementById("total").style.backgroundColor="#88E788";
}
