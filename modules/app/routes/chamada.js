var query = require('../querys/queryChamada');

module.exports = function(app) {
    app.get("/chamada/findOne/:id", async (req, res) => {
        try {
            const chamada = await query.getOneChamada(req.params.id);
            res.json(chamada);
        }
        catch (error) {
            res.status(404).json({ message: 'chamada não encontrada' });
        }
    });

    app.get("/chamada/findAll", async (req, res) => {
        try {
            const chamadas = await query.getAllChamadas();
            res.json(chamadas);
        }
        catch (error) {
            res.status(404).json({ message: 'Chamadas não encontradas'})
        }
    });

    app.get("/chamada/findActives", async (req, res) => {
        try {
            const chamadas = await query.getAllActiveChamadas();
            res.json(chamadas);
        }
        catch (error) {
            res.status(404).json({ message: 'Chamadas não encontradas'})
        }
    });


    app.post("/chamada/createOne", async (req, res) => {
        try {
            const { initial_location, final_location, call_creator, call_creator_number, call_acceptor } = req.body;
            const chamada = await query.createChamada(initial_location, final_location, call_creator, call_creator_number, call_acceptor);
            res.json(chamada);
            console.log("Chamada criada com sucesso");
        }
        catch (error) {
            console.error("Erro ao criar chamada:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao criar a chamada' });
        }
    });

    app.put("/chamada/updateOne/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const { initial_location, final_location, call_creator, call_creator_number, call_acceptor, active } = req.body;
            const chamada = await query.updateChamada(id, initial_location, final_location, call_creator, call_creator_number, call_acceptor, active); 
            res.json(chamada);  
        }
        catch (error) {
            console.error("Erro ao modificar o perfil:", error);
            res.status(500).json({ message: 'Ocorreu um erro ao modificar o perfil' });
        }
   });

   app.delete("/chamada/deleteOne/:id", async (req, res) => {
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