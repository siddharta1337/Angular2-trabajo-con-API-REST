var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.connect("mongodb://localhost:27017/lista-angular");

var Lista = mongoose.model("Lista", {
  texto: String,
  terminado: Boolean,
});

app.configure(function () {
  app.use(express.static(__dirname + "/publico"));

  app.use(express.bodyParser());

  app.use(express.methodOverride());
});

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/lista", function (peticion, respuesta) {
  Lista.create(
    {
      texto: peticion.body.texto,
    },
    function (error, lista) {
      if (error) {
        respuesta.send(error);
      }

      Lista.find(function (error, lista) {
        if (error) {
          respuesta.send(error);
        }

        respuesta.json(lista);
      });
    }
  );
});

app.get("/api/lista", function (peticion, respuesta) {
  Lista.find(function (error, lista) {
    if (error) {
      respuesta.send(error);
    }

    respuesta.json(lista);
  });
});

app.delete("/api/lista/:item", function (peticion, respuesta) {
  Lista.remove(
    {
      _id: peticion.params.item,
    },
    function (error, lista) {
      if (error) {
        respuesta.send(error);
      }

      Lista.find(function (error, lista) {
        if (error) {
          respuesta.send(error);
        }

        respuesta.json(lista);
      });
    }
  );
});

app.put("/api/lista/:item", function (peticion, respuesta) {
  Lista.findOneAndUpdate(
    { _id: peticion.params.item },
    { texto: peticion.body.texto },
    function (error, lista) {
      if (error) {
        respuesta.send(error);
      }

      Lista.find(function (error, lista) {
        if (error) {
          respuesta.send(error);
        }

        respuesta.json(lista);
      });
    }
  );
});

app.listen(8080, function () {
  console.log("servidor 2");
});
