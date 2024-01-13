const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const app = express();
const port = 5500;

server.use(middlewares);
server.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});