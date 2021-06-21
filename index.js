const express = require('express');
const app = express();

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000')
);

app.get('/', (req, res) =>
    res.sendFile(__dirname + "/index.html")
);

app.use('/css',express.static(__dirname +'/css'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/img',express.static(__dirname +'/img'));