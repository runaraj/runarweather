

const chai = require('chai');
// const should = chai.should();
// chai.use(chaiHttp);
var request = require('request');



describe('Api status and content', function() {
    it('Main page status is 500', function(done) {
        request('https://runarweather-backend-docker.azurewebsites.net/api', function(err, res, body) {
            chai.expect(res.statusCode).to.equal(500);
            done();
        });
    });

    it('Sandnes request status is 200', function(done) {
        request('https://runarweather-backend-docker.azurewebsites.net/api/sandnes', function(err, res, body) {
            chai.expect(res.statusCode).to.equal(200);
            done();
        });
    });
})
