const Engineer = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const str = 'Tyler';
            const result = new Engineer('Tyler').getName();

            expect(result).toEqual(str);
        })
    })
    describe('getId', () => {
        it('Should return the ID', () => {
            const str = '1';
            const result = new Engineer('Tyler', str).getId();

            expect(result).toEqual(str);
        })
    })
    describe('getEmail', () => {
        it('Should return the email', () => {
            const str = 'tyler@email.com';
            const result = new Engineer('Tyler', 1, str).getEmail();

            expect(result).toEqual(str);
        })
    })
    describe('getGithub', () => {
        it('Should return github username', () => {
            const github = `${getGithub()}`
            const result = new Engineer('Tyler', 1, 'tyler@gmail.com', github).getGithub();

            expect(result).toEqual(15);
        })
    })
    describe('getRole', () => {
        it('Should return the role', () => {
            const str = 'Employee';
            const result = new Engineer('Tyler', 1, ' ', str).getRole();
            
            expect(result).toEqual(str);
        })
    })
})