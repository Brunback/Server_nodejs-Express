import express from 'express';
const app = express();


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


const port = 3000; 
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
