var http = require('http');

var configuracoes = {
	hostname: 'localhost',
	port:3000,
	path:'/produtos',
	method: 'post',
	headers: {
		'Accept':'application/json',
		'Content-type':'application/json'
	}
};

var client = http.request(configuracoes, function(res){
	res.on('data', function(body){
		console.log('corpo' + body);
	});
});

var produto = {
	titulo:'mais sobre node',
	descricao: 'node, javascript e um pouco de http',
	preco: 100
};

client.end(JSON.stringify(produto));