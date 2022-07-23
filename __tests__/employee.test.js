const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const str = 'Tyler';
            const result = new Employee(str).getName();

            expect(result).toBe("Tyler");
        })
    })
    describe('getId', () => {
        it('Should return the ID', () => {
            const idNum = 1;
            const result = new Employee('Tyler', idNum).getId();

            expect(result).toEqual(1);
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
