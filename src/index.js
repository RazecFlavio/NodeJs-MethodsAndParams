const express = require('express')
const app = express();
app.use(express.json());

app.delete('/courses/:id', (req, res) => {
    res.json(['curso 2', 'curso 3', 'curso 4']);
});

app.patch('/courses/:id', (req, res) => {
    res.json(['curso 7', 'curso 2', 'curso 3', 'curso 4']);
})

app.put('/courses/:id', (req, res) => {
    const { id } = req.params; // route params
    console.log('Route Params: ', id);
    res.json(['curso 6', 'curso 2', 'curso 3', 'curso 4']);
})

app.post('/courses', (req, res) => {
    const body = req.body;
    console.log('Body Params', body);
    //body params - necessario utilizar o app.use(express.json());
    let db = ['curso 1', 'curso 2', 'curso 3'];
    let curso = 'novoCurso';
    let data = [...db, curso];
    res.json(data);
})

app.get('/courses', (req, res) => {
    const query = req.query;
    //query params -> parametros que vem na rota exemplo:
    // .../courses?page=1&order=asc
    console.log('Query Params', query);
    res.json([
        'curso 1', 'curso 2', 'curso 3'
    ]);
});


app.listen(3333, () => {
    console.log('Servidor ONLINE ! ')
});