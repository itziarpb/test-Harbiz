import { TrainerInterface, ClientInterface } from "./interfaces";

// Introducimos los datos de entrenadores y clientes aportados en el problema
export const TrainersData: TrainerInterface[] = [
    { name: 'A', reputation: 4.5, placesAvailable: 1 },
    { name: 'B', reputation: 3.2, placesAvailable: 4 },
    { name: 'C', reputation: 1.2, placesAvailable: 3 },
    { name: 'D', reputation: 3.4, placesAvailable: 2 },
];

export const ClientsData: ClientInterface[] = [
    { name: 'q', reputationImportance: 2.6 },
    { name: 'r', reputationImportance: 3.7 },
    { name: 's', reputationImportance: 8.5 },
    { name: 't', reputationImportance: 9.7 },
    { name: 'u', reputationImportance: 2.6 },
    { name: 'v', reputationImportance: 4.7 },
    { name: 'w', reputationImportance: 5.6 },
    { name: 'x', reputationImportance: 3.7 },
    { name: 'y', reputationImportance: 8.1 },
    { name: 'z', reputationImportance: 2.5 }
];