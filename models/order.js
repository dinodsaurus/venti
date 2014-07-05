var mongoose     = require('mongoose'),
    Schema       = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');


var NalogSchema   = new Schema({
    datum: Date,
    narucitelj: String,
    predstavnik: String,
    telefon: String,
    napomena: String,
    adresa: String,
    datumOd: Date,
    datumDo: Date
});
NalogSchema.plugin(autoIncrement.plugin, 'Order');

module.exports = mongoose.model('Order', NalogSchema);