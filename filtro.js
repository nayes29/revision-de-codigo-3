// Arreglo de objetos que contiene información sobre los productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Obtener el elemento que contiene la lista de productos
const li = document.getElementById("lista-de-productos");

// Obtener el elemento de entrada de texto
const $i = document.getElementById('input');


// Función que crea la lista de productos
function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

// Mostrar la lista de productos
displayProductos(productos);


// Obtener el botón de filtro
const botonDeFiltro = document.getElementById("clickMe");

// Función que filtra los productos según el tipo o el color
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};

// Agregar un evento de clic al botón de filtro
botonDeFiltro.onclick = function() {
  // Eliminar todos los productos de la lista
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  // Obtener el texto de entrada
  const texto = $i.value; 
  console.log(texto);

  // Filtrar los productos según el texto de entrada
  const productosFiltrados = filtrado(productos, texto );

  // Mostrar los productos filtrados
  displayProductos(productosFiltrados);

  //---------------
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }
};

const filtro= (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));

};
