function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	this._connection.query('select * from livros', callback);
}

ProdutosDAO.prototype.salva = function(livro,callback) {
    this._connection.query('INSERT INTO livros SET ?', livro, callback);
}

module.exports = function() {
	return ProdutosDAO;
}