import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Conexión a base de datos
const mongose = require('mongoose');
//const uri = 'mongodb://localhost:27017/prueba';
const uri = 'mongodb+srv://ricardoT:restaurantevue@restaurantedigital.lfl5l.mongodb.net/prueba'
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongose.connect(uri, options).then(
    () => {
        console.log("Conectado a mongoDB");
    },
    err => { err }
);

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Rutas
/*app.get('/',function(req,res){
    res.send('Hola mundo!!');
});*/

app.use('/api', require('./routes/nota'));

//Generación puerto estático
/*app.listen(3000, function(){
    console.log("servidor corriendo en el puerto 3000");
});*/

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//Generación puerto automático
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function (){
    console.log('Ejemplo escucha del puerto en ' + app.get('puerto'));
});