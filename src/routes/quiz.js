var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.get("/listarAcertosAgrupadoDia/:idServer", function (req, res) {
    quizController.listarAcertosAgrupadoDia(req, res);
});

router.get("/personaTeste/:idServer", function (req, res) {
    quizController.personaTeste(req, res);
});
module.exports = router;