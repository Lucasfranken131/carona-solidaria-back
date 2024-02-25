var query = require('../querys/queryMotorista');

module.exports = function(app) {
    app.get("/motorista/:id", async (req, res) => {
        try {
            const perfil = await query.getOneMotorista(req.params.id);
            res.json(perfil);
        }
        catch (error) {
            res.status(404).json({ message: 'Perfil não encontrado' });
        }
    });

    app.get("/motorista", async (req, res) => {
        try {
            const perfis = await query.getAllMotoristas();
            res.json(perfis);
        }
        catch (error) {
            res.status(404).json({ message: 'Perfis não encontrados'})
        }
    });

    app.post("/motorista", async (req, res) => {
        try {
            const { name, cpf, email, password, age, sex, phone_number, turn } = req.body;
            const perfil = await query.createMotorista(name, cpf, email, password, age, sex, phone_number, turn);
            res.json('O perfil com id: '+ perfil.id + ' foi criado');
            console.log("Perfil criado com sucesso");
        }
        catch (error) {
            console.error("Erro ao criar perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao criar o perfil' });
        }
    });

    app.put("/motorista/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const { name, cpf, email, password, age, sex, phone_number, turn } = req.body;
            const perfil = await query.updateMotorista(id ,name, cpf, email, password, age, sex, phone_number, turn); 
            res.json('O perfil com id: '+ id + ',foi modificado ');  
        }
        catch (error) {
            console.error("Erro ao modificar o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao modificar o perfil' });
        }
   });

   app.delete("/motorista/:id", async (req, res) => {
        try{
            const id = req.params.id;
            const perfil = await query.deleteMotorista(id);
            res.json("Perfil deletado: "+ id);
        }
        catch (error) {
            console.error("Erro ao excluir o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao excluir o perfil' });
        }
   });
};