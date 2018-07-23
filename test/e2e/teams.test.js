const { assert } = require('chai');
const { dropCollection } = require('./db');


// const { createServer } = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../lib/app-koa');
// const server = createServer(app);
const request = chai.request(app.callback()).keepOpen();



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
            .then(({ body }) => {
                assert.deepEqual(body.name, data.name);
                team = body;
            });

    });

    it('should POST a team', () => {
        assert.isOk(team._id);
    });

    it('should GET all teams', () => {
        return request
            .get('/api/teams')
            .then(res => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, [team]);
            });
    });

    it('should GET a team by id', () => {
        return request
            .get(`/api/teams/${team._id}`)
            .then(({ body }) => {
                assert.deepEqual(body, team);
            });
    });

    it('should GET a team by query', () => {
        return request
            .get('/api/teams?region=North%20America')
            .then(({ body }) => {
                assert.deepEqual(body, [team]);
            });
    });

    // it('should PUT a team', () => {
    //     team.name = 'EG';
    //     return request
    //         .put(`/api/teams/${team._id}`)
    //         .send(team)
    //         .then(({ body }) => {
    //             assert.deepEqual(body, team);
    //         });
    // });

    // it('should DELETE a team', () => {
    //     return request
    //         .del(`/api/teams/${team._id}`)
    //         .then(res => {
    //             assert.equal(res.status, 200);
    //         });
    // });
});