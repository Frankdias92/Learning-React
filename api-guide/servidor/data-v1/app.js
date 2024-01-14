let express = require('express');
let bodyParser = require('body-parser');
let jsonServer = require('json-server');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuração do JSON Server
const jsonServerRouter = jsonServer.router('db.json');

// Middleware para modificar a resposta do roteador JSON Server
jsonServerRouter.render = (req, res) => {
  res.jsonp(res.locals.data);
};

// Adiciona o roteador JSON Server como middleware
app.use('/api', jsonServerRouter);

// Rota do Express para obter todos os posts
app.get('/posts', (req, res) => {
  // Lógica para obter posts (substitua com a sua lógica)
  res.json({ message: 'Obtendo todos os posts' });
});

// Rota do Express para obter um post específico
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  // Lógica para obter o post com o ID fornecido (substitua com a sua lógica)
  res.json({ message: `Obtendo o post com o ID ${postId}` });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
