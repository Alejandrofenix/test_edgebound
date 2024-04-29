const cors = require('cors');
const express = require('express');

class Server {
  constructor() {
    this.config();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  config() {
    this.app = express();
    this.port = process.env.PORT||8080 ;
    this.productsPath = '/api/products';
  }

  routes() {
    this.app.use(this.productsPath, require('./routes/products.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
