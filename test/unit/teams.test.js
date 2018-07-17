const chai = require('chai');
const { assert } = chai;
const Team = require('../../lib/models/team');

describe('Events model', () => {

    const getErrors = (validation, numberExpected) => {
        assert.isDefined(validation);
        const errors = validation.errors;
        assert.equal(Object.keys(errors).length, numberExpected);
        return errors;
    };

    it('validates good model', () => {
        const data = {
            name: 'Evil Geniuses',
            region: 'North America',
            members: ['Arteezy', 'Suma1l', 's4', 'Cr1t-', 'Fly'],
            coach: 'BuLba',
            invited: false
        };
        const team = new Team(data);
        const json = team.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(team.validateSync());
    });
});