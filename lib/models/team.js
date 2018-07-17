const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        enum: ['North America', 'South America', 'Europe', 'CIS', 'China', 'Southeast Asia']
    },
    members: [{
        type: String,
        minlength: 2,
        maxlength: 20
    }],
    coach: {
        type: String,
        maxlength: 20
    },
    invited: { 
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Team', schema);