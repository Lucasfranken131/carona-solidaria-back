var app = require("./modules/config/server");
var rotaChamada = require("./modules/app/routes/chamada");
rotaChamada(app);
var rotaPerfil = require("./modules/app/routes/perfil");
rotaPerfil(app);
var rotaUsuario = require("./modules/app/routes/usuario");
rotaUsuario(app);

app.listen(3001, function() {
    console.log("Servidor rodando com express")
});