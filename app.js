import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Olá! Servidor funcionando!");
});

app.get('/routing', (req, res) => {
    res.send("Rota GET");
});

app.post('/routing', (req, res) => {
    res.send("Rota POST");
});

app.put('/routing', (req, res) => {
    res.send("Rota PUT");
});

app.patch('/routing', (req, res) => {
    res.send("Rota PATCH");
});

app.delete('/routing', (req, res) => {
    res.send("Rota DELETE");
});

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}.`);
});