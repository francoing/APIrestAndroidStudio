var mongoose = require("mongoose");
require('../modelos/personaModel.js');
require('../modelos/PublicacionModel.js')

var personaModel = mongoose.model('Persona');
var PublicacionModel = mongoose.model('Publicacion');

//agregar objetos al contenedor 
exports.addPersona= function(req,callback){
    var objPersona = new personaModel();
    objPersona.Nombre = req.body.Nombre;
    objPersona.Apellido = req.body.Apellido;
    objPersona.Edad = req.body.Edad;
    objPersona.Sexo = req.body.Sexo;
    objPersona.IsProfesional = req.body.IsProfesional;

    objPersona.save(function(err, retorno){
     if   (err) callback({ estado: { codigo: 2 ,respuesta:err.menssager } });
        callback({ estado:{codigo:1, respuesta:'proceso exitoso' }, persona:retorno  });
 });

};

//actualizar objetos del contenedor
exports.updatePersona= function(req,callback){


    personaModel.findById(req.params.id,function(err,personaBuscada){
        personaBuscada.Nombre = req.body.Nombre;
        personaBuscada.Apellido = req.body.Apellido;
        personaBuscada.Edad = req.body.Edad;
        personaBuscada.Sexo = req.body.Sexo;
        personaBuscada.IsProfesional = req.body.IsProfesional;

        personaBuscada.save(function(err, resultadoUpdate){
            if   (err) callback({ estado: { codigo: 2 ,respuesta:err.menssager } });
               callback({ estado:{codigo:1, respuesta:'proceso exitoso' }, persona:resultadoUpdate  });
        });
    });
};




//eliminar
exports.deletePersona = function(req,callback){

    personaModel.findById(req.params.id, function(err, personaBuscada){
        

        personaBuscada.remove(function (err) {
            if   (err) callback({ estado: { codigo: 2 ,respuesta:err.menssager } });
               callback({ estado:{codigo:1, respuesta:'proceso exitoso' } });
        });
    });



};

//buscar una persona por id 
exports.findByIdPersona = function(req,callback){

    personaModel.findById(req.params.id,function(err,personaBuscada){
        if   (err) callback({ estado: { codigo: 2 ,respuesta:err.menssager } });
        callback({ estado:{codigo:1, respuesta:'proceso exitoso' }, persona:personaBuscada  });
        });
 

};
// Listar todas las personas

exports.finAlldPersona= function(req,callback){

    personaModel.find({},function(err,personasBuscadas){
        if   (err) callback({ estado: { codigo: 2 ,respuesta:err.menssager } });
        callback({ estado:{codigo:1, respuesta:'proceso exitoso' }, presonas:personasBuscadas  });
        });
 


};
