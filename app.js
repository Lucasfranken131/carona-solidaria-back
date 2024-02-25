var app = require("./modules/config/server");
var rotaChamada = require("./modules/app/routes/chamada");
rotaChamada(app);
var rotaPassageiro = require("./modules/app/routes/passageiro");
rotaPassageiro(app);
var rotaMotorista = require("./modules/app/routes/motorista");
rotaMotorista(app);

app.listen(3001, function() {
    console.log("Servidor rodando com express")
});