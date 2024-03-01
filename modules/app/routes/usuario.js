var query = require('../querys/queryUsuario');

module.exports = function(app) {
    app.get("/usuario/findOne/:id", async (req, res) => {
        try {
            const usuario = await query.getOneUsuario(req.params.id);
            res.json(usuario);
        }
        catch (error) {
            res.status(404).json({ message: 'Usuario não encontrado' });
        }
    });

    app.get("/usuario/findAll", async (req, res) => {
        try {
            const usuarios = await query.getAllUsuarios();
            res.json(usuarios);
        }
        catch (error) {
            res.status(404).json({ message: 'Usuarios não encontrados'})
        }
    });

    app.post("/usuario/login", async (req, res) => {
        try {
            const { email, password } = req.body;
            const login = await query.login(email, password);
            res.json(login);
            return login;
        }
        catch (error) {
            res.status(404).json({ message: 'Não foi possível fazer Login'})
        }
    });

    app.post("/usuario/createOne", async (req, res) => {
        try {
            const { name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type } = req.body;
            const perfil = await query.createUsuario(name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type);
            res.json(perfil);
            console.log("Perfil criado com sucesso");
            return res;
        }
        catch (error) {
            console.error("Erro ao criar perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao criar o perfil' });
        }
    });

    app.put("/usuario/updateOne/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const { name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type } = req.body;
            const perfil = await query.updateUsuario(id ,name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type); 
            res.json(perfil);  
        }
        catch (error) {
            console.error("Erro ao modificar o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao modificar o perfil' });
        }
   });

   app.delete("/usuario/deleteOne/:id", async (req, res) => {
        try{
            const id = req.params.id;
            const perfil = await query.deleteUsuario(id);
            res.json("Perfil deletado: "+ id);
        }
        catch (error) {
            console.error("Erro ao excluir o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao excluir o perfil' });
        }
   });
};