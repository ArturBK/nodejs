var express = require('../config/express');
var request = require('supertest')(express);


describe('#ProdutosController', function() {
    it('#listagem de produtos json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
});

beforeEach(function(done) {
        var connection = app.infra.connectionFactory();            
        connection.query("delete from livros", function(ex,result){
            if(!ex){
                done();
            }
        });
 });