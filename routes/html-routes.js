const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.send(index.html);
  });

module.exports = Router;