var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var publicacionSchema = new Schema({
   contenido: String,
    Create_at: {type: Date,require: true, default: Date.now},
    
    IdPersona:{ type: Schema.ObjectId, ref:'Persona'}
});
module.exports = mongoose.model('Publicacion',publicacionSchema);