var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personaSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Edad: Number,
    Create_at: {type:Date ,require: true, default: Date.now},
    Sexo:{type: String, enum:['Masculino','Femenino']},
    IsProfessional:Boolean
});
module.exports = mongoose.model('Persona',personaSchema);