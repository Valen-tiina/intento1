
let carro = {}; // Objeto para almacenar los productos del carrito

function toggleInfo(infoId) {
    const infos = document.querySelectorAll('.info');
    infos.forEach(info => info.style.display = 'none');

    const bienvenida = document.getElementById('mensaje-de-bienvenida');
    if (bienvenida) {
        bienvenida.style.display = 'none';
    }

    const selectedInfo = document.getElementById(infoId);
    if (selectedInfo) {
        selectedInfo.style.display = 'block';
    }
}
// en esta funcion se toma dos parametro el nombre y el precio del producto
function AgregarATuCarro(name, price) {
//verifica si el pasaporte con el nombre [name] proporcionado no existe en el carrito(carro)
    if (!carro[name]) {
//la cantidad inicia como 0 si el pasaporte no esta en el carrito lo agregara como una propiedad
//sus dos propiedades seran precio y cantidad
        carro[name] = { price: price, cantidad: 0 };
    }
//ya al presionarse el boton de agregar compra cantidad sera igual a 1
    carro[name].cantidad += 1;
//esta llamando la funcion para que se actualice la visualizacion del interfaz del carrito
    ActualizarCarro();
}
//en esta funcion como lo dije arriba es para la visualizacion
function ActualizarCarro() {
// obtiene el elemento del html mediante su id este elemento que tendra los articulos agregados 
//al carrito
    const carritoItems = document.getElementById('elementos-carrito');
//limpia todo lo que tenga actualmente el carrito
    carritoItems.innerHTML = '';
//variable para guarda el total de todos los pasaportes adquiridos
    let total = 0;
//itera sobre cada elemento del carrito (carro) y name es el nombre e item es el objeto que tiene precio y cantidad 
    for (const [name, item] of Object.entries(carro)) {
//calcula el total  el objeto item multiplica sus propiedades con precio por cantidad 
        const itemTotal = item.price * item.cantidad;
//y el valor de la variable de arriba se le sumara a la variable total que estaba en 0
        total += itemTotal;
//se crea la variable div que funciona para ver el producto incluido al carrito
//se esta creando un nodo de tipo div, a ese div se le puede agregar, establecer atributos
//o aplicar estilos y agregarlo al documento existente
        const div = document.createElement('div');
//asigna una clase en este caso elemento carrito al nuevo div creado
        div.className = 'elemento-carrito';
//establece el contenido HTML del div, mostrando el nombre del artículo, la cantidad y el total del artículo.
        div.innerHTML = `
            <span>${name} x ${item.cantidad}</span>
            <span>$${itemTotal}</span>
        `;
//Agrega el nuevo div al contenedor del carrito en el HTML.
        carritoItems.appendChild(div);
    }
//llama al nodo el html que tiene por id total que refleja el total a pagar
    document.getElementById('total').textContent = total;
}
//esta funcion muestra un mensaje con el total a pagar
function checkout() {
    alert('Gracias por tu compra. Total a pagar: $' + document.getElementById('total').textContent);
//limpia el carrito
    carro = {};
//llama a actualizar carro para que se vea que se limpio el carro
    ActualizarCarro();
}