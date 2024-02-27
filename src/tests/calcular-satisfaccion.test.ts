import { calculateSatisfaction } from '../assign-clients'


describe('Calcular Satisfaccion', () => {

    it('Reputación max, importancia min', () => {
        expect(calculateSatisfaction(5, 0)).toBe(10) //max satisfaccion
    })
    it('Reputación max, importancia max', () => {
        expect(calculateSatisfaction(5, 10)).toBe(5) //satisfaccion media
    })
    it('Reputación min, importancia min', () => {
        expect(calculateSatisfaction(0, 0)).toBe(5) // satisfaccion media
    })
    it('Reputación min, importancia max', () => {
        expect(calculateSatisfaction(0, 10)).toBe(0) //min satisfaccion
    })
})
