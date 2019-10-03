const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

/**
 * Access Schema
 * @private
 */
const userSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name : {
        type: String,
    },
    type : {
        type: String
    },
    favorite : {
        type : String
    }
});

/**
 * @typedef Access
 */
let User = mongoose.model('user', userSchema);
module.exports = { User }
