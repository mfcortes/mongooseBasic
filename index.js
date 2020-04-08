const mongosse = require('mongoose');

mongosse.connect('mongodb://localhost/mongoose_basic', (err) => {
    if (err) throw err;
    
    console.log('conexion exitosa');

});
