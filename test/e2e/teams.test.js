const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Teams API', () => {
    beforeEach(() => dropCollection('teams'));

    let team;

    beforeEach(() => {
        const data = {
            name: 'Evil Geniuses',
            region: 'North America',
            members: ['Arteezy', 'Suma1l', 's4', 'Cr1t-', 'Fly'],
            coach: 'BuLba',
            invited: false
        };
        
        return request
            .post('/api/teams')
            .send(data)
            .then(({ body }) => team = body);
    });

    it('saves a team', () => {
        assert.isOk(team._id);
    })
});