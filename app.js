import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Olá! Servidor funcionando!");
});

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}.`);
});