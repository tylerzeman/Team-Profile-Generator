const Intern = require('../lib/employee');

describe('Intern', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const str = 'Tyler';
            const result = new Employee('Tyler').getName();

            expect(result).toEqual(str);
        })
    })
    describe('getId', () => {
        it('Should return the ID', () => {
            const str = '1';
            const result = new Employee('Tyler', str).getId();

            expect(result).toEqual(str);
        })
    })
    describe('getEmail', () => {
        it('Should return the email', () => {
            const str = 'tyler@email.com';
            const result = new Employee('Tyler', 1, str).getEmail();

            expect(result).toEqual(str);
        })
    })
    describe('getRole', () => {
        it('Should return the role', () => {
            const str = 'Employee';
            const result = new Employee('Tyler', 1, ' ', str).getRole();
            
            expect(result).toEqual(str);
        })
    })
})
