const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: { type: String, max: 50, required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('Student', StudentSchema);