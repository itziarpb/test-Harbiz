import {assignClients} from '../assign-clients'

describe('Asignar Clientes', () => {
    it('Asigna clientes cuando hay plazas disponibles y si no, asigna el siguiente entrenador', () => {
        const trainers = [
            { name: 'Trainer1', reputation: 4.5, placesAvailable: 1 },
            { name: 'Trainer2', reputation: 3.2, placesAvailable: 2 }
        ];
        const clients = [
            { name: 'Client1', reputationImportance: 5 },
            { name: 'Client2', reputationImportance: 8 }
        ];
        const assignment = assignClients(trainers, clients);
        
        expect(assignment.length).toBe(2);
        expect(assignment[0].trainer).toBe('Trainer1');
        expect(assignment[1].trainer).toBe('Trainer2');
    });

    it('Error en el caso de no haber suficientes entrenadores disponibles', () => {
        const trainers = [
            { name: 'Trainer1', reputation: 4.5, placesAvailable: 1 }
        ];
        const clients = [
            { name: 'Client1', reputationImportance: 5 },
            { name: 'Client2', reputationImportance: 8 }
        ];

        // Verifica que la función lance un error cuando no hay suficientes entrenadores disponibles
        expect(() => assignClients(trainers, clients)).toThrowError('Numero de entrenadores disponibles insuficientes');
    });
});