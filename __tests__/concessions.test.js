const concessions = require('../data/concessions');
const { getConcessionByID, calculateTotalFromIDs } = require('../src/concessions');

describe('getConcessionByID', () => {
    test('should return the correct concession for a valid id', () => {
        const id = 'g9sZdG1hI';
        const expectedConcession = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
        const result = getConcessionByID(concessions, id);
        expect(result).toEqual(expectedConcession);
    });

    test('should return null for an invalid id', () => {
        const id = 'invalid-id';
        const result = getConcessionByID(concessions, id);
        expect(result).toBeNull();
    });
});

describe('calculateTotalFromIDs', () => {
    test('should calculate the total price for a list of concession ids', () => {
        const ids = ['g9sZdG1hI', '0Qs9Yp2NL'];
        const expectedTotal = 1958; // 929 + 1029
        const result = calculateTotalFromIDs(concessions, ids);
        expect(result).toBe(expectedTotal);
    });

    test('should return 0 for an empty list of concession ids', () => {
        const ids = [];
        const expectedTotal = 0;
        const result = calculateTotalFromIDs(concessions, ids);
        expect(result).toBe(expectedTotal);
    });
});
