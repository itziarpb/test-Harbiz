// Definimos las interfaces de los entrenadores y clientes.
export interface TrainerInterface {
    name: string;
    reputation: number;
    placesAvailable: number;
}

export interface ClientInterface {
    name: string;
    reputationImportance: number;
}

//Definimos la interface del listado que devolverá la funcion. Consta del nombre del cliente, el nombre del entrenador asignado y el grado de satisfaccion.
export interface AssignedClientInterface {
    client: string;
    trainer: string;
    satisfaction: number;
}