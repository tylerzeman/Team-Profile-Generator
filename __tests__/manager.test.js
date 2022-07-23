const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const str = 'Tyler';
            const result = new Manager('Tyler').getName();

            expect(result).toBe(str);
        })
    })
    describe('', () => {
        it('Should return the ID', () => {
            const str = 2;
            const result = new Manager('Tyler', str).getId();

            expect(result).toEqual(str);
        })
    })
    describe('getEmail', () => {
        it('Should return the email', () => {
            const str = 'tyler@email.com';
            const result = new Manager('Tyler', 2, str).getEmail();

            expect(result).toEqual(str);
        })
    })
    describe('getOfficeNumber', () => {
        it('Should return the office number', () => {
            const officeNum = 15;
            const result = new Manager('Tyler', 2, 'tyler@email.com', officeNum).getOfficeNumber();

            expect(result).toEqual(15);
        })
    })
    describe('getRole', () => {
        it('Should return the role', () => {
            const str = 'Manager';
            const result = new Manager('Tyler',2, ' ').getRole();
            
            expect(result).toEqual(str);
        })
    })
})