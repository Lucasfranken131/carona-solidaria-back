var query = require('../querys/queryPassageiro');

module.exports = function(app) {
    app.get("/perfil/:id", async (req, res) => {
        try {
            const perfil = await query.getOnePassageiro(req.params.id);
            res.json(perfil);
        }
        catch (error) {
            res.status(404).json({ message: 'Perfil não encontrado' });
        }
    });

    app.get("/perfil", async (req, res) => {
        try {
            const perfis = await query.getAllPassageiros();
            res.json(perfis);
        }
        catch (error) {
            res.status(404).json({ message: 'Perfis não encontrados'})
        }
    });

    app.post("/perfil", async (req, res) => {
        try {
            const { name, cpf, email, password, age, sex, phone_number, turn } = req.body;
            const perfil = await query.createPassageiro(name, cpf, email, password, age, sex, phone_number, turn);
            res.json('O perfil com id: '+ perfil.id + ' foi criado');
            console.log("Perfil criado com sucesso");
        }
        catch (error) {
            console.error("Erro ao criar perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao criar o perfil' });
        }
    });
};