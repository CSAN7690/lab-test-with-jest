const tickets = require('../data/tickets');
const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets');

describe('getTicketByName', () => {
    test('should return the correct ticket for a valid name', () => {
        const name = 'Adult Matinee';
        const expectedTicket = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
        const result = getTicketByName(tickets, name);
        expect(result).toEqual(expectedTicket);
    });

    test('should return null for an invalid name', () => {
        const name = 'invalid-name';
        const result = getTicketByName(tickets, name);
        expect(result).toBeNull();
    });
});

describe('calculateTotalFromTicketNames', () => {
    test('should calculate the total price for a list of ticket names', () => {
        const names = ['Adult Matinee', 'Senior Matinee'];
        const expectedTotal = 1788; // 949 + 839
        const result = calculateTotalFromTicketNames(tickets, names);
        expect(result).toBe(expectedTotal);
    });

    test('should return 0 for an empty list of ticket names', () => {
        const names = [];
        const expectedTotal = 0;
        const result = calculateTotalFromTicketNames(tickets, names);
        expect(result).toBe(expectedTotal);
    });
});
