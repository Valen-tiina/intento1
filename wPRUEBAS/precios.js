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

function AgregarATuCarro(name, price) {
    if (!carro[name]) {
        carro[name] = { price: price, cantidad: 0 };
    }
    carro[name].cantidad += 1;
    ActualizarCarro();
}

function ActualizarCarro() {
    const carritoItems = document.getElementById('elementos-carrito');
    carritoItems.innerHTML = '';
    let total = 0;

    for (const [name, item] of Object.entries(carro)) {
        const itemTotal = item.price * item.cantidad;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'carrito-item';
        //para agregar el nombre y la x ejemplo GOLD x
        div.innerHTML = `
         <span>${name} x <input type="number" value="${item.cantidad}" min="1" onchange="cambiarCantidad('${name}', this.value)"></span> 
            <span>$${itemTotal}</span>
            <button class="eliminar" onclick="eliminarDelCarro('${name}')"><i class='bx bxs-trash'></i></button>
        `;
        carritoItems.appendChild(div);
    }

    document.getElementById('total').textContent = total;
}

function eliminarDelCarro(name) {
    delete carro[name];
    ActualizarCarro();
}

function cambiarCantidad(name, cantidad) {
    if (cantidad <= 0) {
        eliminarDelCarro(name);
    } else {
        carro[name].cantidad = parseInt(cantidad, 10);
        ActualizarCarro();
    }
}

function checkout() {
    alert('Gracias por tu compra. Total a pagar: $' + document.getElementById('total').textContent);
    carro = {};
    ActualizarCarro();
}