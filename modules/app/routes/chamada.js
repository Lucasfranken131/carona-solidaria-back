var query = require('../querys/queryChamada');

module.exports = function(app) {
    app.get("/chamada/:id", async (req, res) => {
        try {
            const chamada = await query.getOneChamada(req.params.id);
            res.json(chamada);
        }
        catch (error) {
            res.status(404).json({ message: 'chamada não encontrada' });
        }
    });

    app.get("/chamada", async (req, res) => {
        try {
            const chamadas = await query.getAllChamadas();
            res.json(chamadas);
        }
        catch (error) {
            res.status(404).json({ message: 'Chamadas não encontradas'})
        }
    });

    app.get("/chamada/active", async (req, res) => {
        try {
            const chamadas = await query.getAllActiveChamadas();
            res.json(chamadas);
        }
        catch (error) {
            res.status(404).json({ message: 'Chamadas não encontradas'})
        }
    });


    app.post("/chamada", async (req, res) => {
        try {
            const { initial_location, final_location, id_driver, id_passenger } = req.body;
            const perfil = await query.createChamada(initial_location, final_location, id_driver, id_passenger);
            res.json('A chamada com id: '+ perfil.id + ' foi criada');
            console.log("Chamada criada com sucesso");
        }
        catch (error) {
            console.error("Erro ao criar chamada:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao criar a chamada' });
        }
    });

    app.put("/chamada/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const { initial_location, final_location, id_driver, id_passenger } = req.body;
            const perfil = await query.updateChamada(id, initial_location, final_location, id_driver, id_passenger); 
            res.json('O perfil com id: '+ id + ',foi modificado ');  
        }
        catch (error) {
            console.error("Erro ao modificar o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao modificar o perfil' });
        }
   });

   app.delete("/chamada/:id", async (req, res) => {
        try{
            const id = req.params.id;
            const perfil = await query.deleteChamada(id);
            res.json("Perfil deletado: "+ id);
        }
        catch (error) {
            console.error("Erro ao excluir o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao excluir o perfil' });
        }
   });
};