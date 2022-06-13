var express = require("express");
var router = express.Router();

var postagensController = require("../controllers/postagensController");


router.get("/listarPostagens", function (req, res) {
    postagensController.listarPostagens(req, res);
});

router.get("/listarPostagensUsuario/:idServer", function (req, res) {
    postagensController.listarPostagensUsuario(req, res);
});

router.get("/deletar/:idServer", function (req, res) {
    postagensController.deletar(req, res);
});

router.get("/listarQuantidadePostagensAgrupadoDia/:idServer", function (req, res) {
    postagensController.listarQuantidadePostagensAgrupadoDia(req, res);
});


router.post("/cadastrar", function (req, res) {
    postagensController.cadastrar(req, res);
});
module.exports = router;