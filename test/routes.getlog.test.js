const chai = require('chai');
var request = require('request');



describe('Getlog status and content', function() {
    it('Status is 200', function(done) {
        request('https://runarweather-backend-docker.azurewebsites.net/getlog', function(err, res, body) {
            console.log(res);    
            chai.expect(res.statusCode).to.equal(200);
            done();
        });
    });
})