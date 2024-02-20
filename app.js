var app = require("./modules/config/server");
var rotaChamada = require("./modules/app/routes/chamada")(app);
var rotaPerfil = require("./modules/app/routes/perfil")(app);
var rotaUsuario = require("./modules/app/routes/usuario")(app);

app.listen(3001, function() {
    console.log("Servidor rodando com express")
});