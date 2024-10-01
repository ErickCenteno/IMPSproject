//Este archivo sera utilizado para configurar todas las rutas principales del sistema
const express = require('express');
const router = express.Router();
const estudianteRepository = require('../repositories/EstudianteRepository');

//configuracion de ruta inicial de la aplicacion
router.get('/',async(_request,response)=> {
    //Probando conexion con la bd
    const lstEstudiante = await estudianteRepository.obtenerTodosLosEstudiantes();
    console.log('Listado:', lstEstudiante);

    response.send('Bienvenido al laboratorio de IMPS');
});

module.exports = router;