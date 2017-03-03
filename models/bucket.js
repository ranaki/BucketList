const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bucket = new Schema({
    name: {type: String, required: false}
});

module.exports = mongoose.model( 'Bucket', Bucket );