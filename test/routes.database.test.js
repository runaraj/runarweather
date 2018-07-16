const chai = require('chai');
var request = require('request');



describe('Database status and content', function() {
    it('Status is 200', function(done) {
        request('https://runarweather-backend-docker.azurewebsites.net/database', function(err, res, body) {
            chai.expect(res.statusCode).to.equal(200);
            done();
        });
    });
    
    describe('Get all comments', function() {
        it('Status is 200', function(done) {
            request('https://runarweather-backend-docker.azurewebsites.net/database/getcomments/sandnes', function(err, res, body) {
                chai.expect(res.statusCode).to.equal(200);
                done();
            })
        });
    })

})