module.exports = function(app) {
	app.get("/produtos",function(req, res) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err, results){
			res.format({
				html: function(){
					res.render('produtos/lista', {lista: results});
				},
				json: function (){
					res.json(results);
				}
			});
		});

		connection.end();
	});

	app.get("/produtos/form",function(req, res) {
		res.render('produtos/form',{validationErrors:{}, produto:{}});
	});

	app.post("/produtos",function(req, res) {

		var produto = req.body;

		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('preco', 'formato inválido').isFloat();

		var erros = req.validationErrors();

	        if(errors){
	              res.format({
	                html: function(){
	                    res.status(400).render("produtos/form",{validationErrors:errors,produto:produto});
	                },
	                json: function(){
	                    res.status(400).send(errors);
	                }
	            });
	            return;
	        }

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(erros, resultados){
			res.redirect('/produtos');
		});
	});
}