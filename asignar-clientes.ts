// Definimos las interfaces de los entrenadores y clientes.
interface Entrenador {
    nombre: string;
    reputacion: number;
    plazasDisponibles: number;
}

interface Cliente {
    nombre: string;
    importanciaReputacion: number;
}

//Definimos la interface del listado que devolverá la funcion. Consta del nombre del cliente, el nombre del entrenador asignado y el grado de satisfaccion.
interface ClienteAsignado {
    cliente: string;
    entrenador: string;
    satisfaccion: number;
}

/*Funcion para establecer el grado de satisfaccion.
    Primero calculamos el error entre la reputacion del entrenador y la importancia que le da el cliente (ambos sobre 10)
    Establecemos un criterio segun esos valores siendo 0 nada satisfecho, 5 satisfecho y 10 muy satisfecho*/
function calcularSatisfaccion(reputacion: number, importancia: number) {
    let satisfaccion: number = 0;
    const error = (reputacion * 2 - importancia)
    satisfaccion = (error + 10) / 2  //sumamos 10 para evitar los valores negativos y dividimos entre 2 para ajustar a la escala de 0 a 10

    return parseFloat(satisfaccion.toFixed(2));
}

// Función que asigna a cada cliente un entrenador segun la importancia de la reputación
function asignarClientes(entrenadores: Entrenador[], clientes: Cliente[]): ClienteAsignado[] {
    let clientesAsignados: ClienteAsignado[] = []
    clientes.sort((c1, c2) => c2.importanciaReputacion - c1.importanciaReputacion);
    entrenadores.sort((e1, e2) => e2.reputacion - e1.reputacion);
    let entrenadoresDisponibles = 0
    for (const entrenador of entrenadores) {
        entrenadoresDisponibles += entrenador.plazasDisponibles
    }
    if (clientes.length > entrenadoresDisponibles) {
        throw new Error("Numero de entrenadores disponibles insuficientes")
    }
    clientes.forEach(cliente =>{
        for (const entrenador of entrenadores) {
            if (entrenador.plazasDisponibles > 0) {
                const asignacion = {
                    cliente: cliente.nombre,
                    entrenador: entrenador.nombre,
                    satisfaccion: calcularSatisfaccion(entrenador.reputacion, cliente.importanciaReputacion)
                }
                clientesAsignados.push(asignacion)
                entrenador.plazasDisponibles--;
                break
            }
        }
    })
    return clientesAsignados;
}

// Introducimos los datos de entrenadores y clientes aportados en el problema
const entrenadores: Entrenador[] = [
    { nombre: 'A', reputacion: 4.5, plazasDisponibles: 1 },
    { nombre: 'B', reputacion: 3.2, plazasDisponibles: 4 },
    { nombre: 'C', reputacion: 1.2, plazasDisponibles: 3 },
    { nombre: 'D', reputacion: 3.4, plazasDisponibles: 2 },
];

const clientes: Cliente[] = [
    { nombre: 'q', importanciaReputacion: 2.6 },
    { nombre: 'r', importanciaReputacion: 3.7 },
    { nombre: 's', importanciaReputacion: 8.5 },
    { nombre: 't', importanciaReputacion: 9.7 },
    { nombre: 'u', importanciaReputacion: 2.6 },
    { nombre: 'v', importanciaReputacion: 4.7 },
    { nombre: 'w', importanciaReputacion: 5.6 },
    { nombre: 'x', importanciaReputacion: 3.7 },
    { nombre: 'y', importanciaReputacion: 8.1 },
    { nombre: 'z', importanciaReputacion: 2.5 }
];

const asignacionClientes = asignarClientes(entrenadores, clientes);
console.log(asignacionClientes)


