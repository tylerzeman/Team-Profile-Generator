const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const str = 'Tyler';
            const result = new Engineer('Tyler').getName();

            expect(result).toEqual(str);
        })
    })
    describe('getId', () => {
        it('Should return the ID', () => {
            const str = 3;
            const result = new Engineer('Tyler', str).getId();

            expect(result).toEqual(str);
        })
    })
    describe('getEmail', () => {
        it('Should return the email', () => {
            const str = 'tyler@email.com';
            const result = new Engineer('Tyler', 3, str).getEmail();

            expect(result).toEqual(str);
        })
    })
    describe('getGithub', () => {
        it('Should return github username', () => {
            const result = new Engineer("Tyler", 3, "tyler@email.com", "tylerzeman");
          expect(result.getGithub()).toEqual("tylerzeman");
        })
    })
    describe('getRole', () => {
        it('Should return the role', () => {
            const str = 'Employee';
            const result = new Engineer('Tyler', 3, ' ', str).getRole();
            
            expect(result).toEqual(str);
        })
    })
})
