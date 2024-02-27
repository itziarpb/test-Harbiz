import { TrainersData, ClientsData } from "./data/data";
import { TrainerInterface, ClientInterface, AssignedClientInterface } from "./data/interfaces";


/*Funcion para establecer el grado de satisfaccion.
    Primero calculamos el error entre la reputacion del entrenador y la importancia que le da el cliente (ambos sobre 10)
    Establecemos un criterio segun esos valores siendo 0 nada satisfecho, 5 satisfecho y 10 muy satisfecho*/
export function calculateSatisfaction(reputation: number, importance: number) {
    let satisfaction: number = 0;
    const error = (reputation * 2 - importance);
    satisfaction = (error + 10) / 2  //sumamos 10 para evitar los valores negativos y dividimos entre 2 para ajustar a la escala de 0 a 10

    return parseFloat(satisfaction.toFixed(2));
}

// Función que asigna a cada cliente un entrenador segun la importancia de la reputación
export function assignClients(trainers: TrainerInterface[], clients: ClientInterface[]): AssignedClientInterface[] {

    //Comprobamos que haya el mismo numero de clientes que de entrenadores
    let availableTrainers = 0;
    trainers.forEach(trainer => {
        availableTrainers += trainer.placesAvailable;
    })
    if (clients.length > availableTrainers) {
        throw new Error("Numero de entrenadores disponibles insuficientes");
    }

    let assignedClients: AssignedClientInterface[] = [];
    clients.sort((c1, c2) => c2.reputationImportance - c1.reputationImportance);
    trainers.sort((t1, t2) => t2.reputation - t1.reputation);

    clients.forEach(client => {
        for (const trainer of trainers) {
            if (trainer.placesAvailable > 0) {
                const assignment = {
                    client: client.name,
                    trainer: trainer.name,
                    satisfaction: calculateSatisfaction(trainer.reputation, client.reputationImportance)
                };
                assignedClients.push(assignment);
                trainer.placesAvailable--;
                break;
            }
        }
    });
    return assignedClients;
}

const assignedClients = assignClients(TrainersData, ClientsData);
console.log(assignedClients);