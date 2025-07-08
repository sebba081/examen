class Formulario {
    constructor(id, nombre, material, cantidad, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.material = material;
        this.cantidad = cantidad
    }

    static validar(datos) {
        const errores = [];

        if (!datos.nombre || datos.nombre.trim() === '') {
            errores.push('El nombre es obligatorio');
        }

        if (!datos.material || !['papel', 'carton', 'plastico', 'vidrio'].includes(datos.material)) {
            errores.push('El material debe ser papel, cartón, plástico o vidrio');
        }

        if (!datos.cantidad || isNaN(datos.cantidad) || datos.cantidad <= 0) {
            errores.push('La cantidad debe ser un número positivo');
        }

        return errores;
    }

    static crearDesdeEntrada(datos) {
        const errores = this.validar(datos);
        if (errores.length > 0) {
            throw new Error(errores.join(', '));
        }

        return new Formulario(
            datos.nombre,
            datos.material,
            parseFloat(datos.cantidad)
        );
    }

    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            material: this.material,
            cantidad: this.cantidad
        };
    }
}

module.exports = Formulario;