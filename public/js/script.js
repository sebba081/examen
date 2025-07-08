
let entregas = [];

document.getElementById('recycleForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const material = document.getElementById('material').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    if (nombre && material && cantidad > 0) {
        const entrega = { nombre, material, cantidad };
        entregas.push(entrega);
        actualizarTabla();
        this.reset();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});

function actualizarTabla() {
    const tbody = document.querySelector('#entregasTable tbody');
    tbody.innerHTML = '';
    entregas.forEach((entrega, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${entrega.nombre}</td>
                    <td>${entrega.material}</td>
                    <td>${entrega.cantidad}</td>
                    <td>
                        <button onclick="verDetalle(${index})">Ver Detalle</button>
                        <button onclick="borrarEntrega(${index})">Borrar</button>
                    </td>
                `;
        tbody.appendChild(tr);
    });
}

function verDetalle(index) {
    const entrega = entregas[index];
    alert(`Detalle de la entrega:\nNombre: ${entrega.nombre}\nMaterial: ${entrega.material}\nCantidad: ${entrega.cantidad} kg`);
}

function borrarEntrega(index) {
    if (confirm('¿Está seguro de que desea borrar esta entrega?')) {
        entregas.splice(index, 1);
        actualizarTabla();

    }
}