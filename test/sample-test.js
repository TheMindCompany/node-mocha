var app = require('./helpers/app');

var should = require('should')
   ,supertest = require('supertest');

describe('Sample Test', function () {

	describe('Test JSON API', function () {
	
		it('JSON All : PASS', function (done) {
			supertest(app).
			get('/test').
			expect(200).
			end(function (err, res){
				res.status.should.equal(200);
				done();
			});
		});
	
		it('JSON ID : PASS', function (done) {
			supertest(app).
			get('/testview/test-one').
			expect(200).
			end(function (err, res){
				res.status.should.equal(200);
				done();
			});
		});
	
		it('JSON ID : FAIL', function (done) {
			supertest(app).
			get('/testview/ONE').
			expect(404).
			end(function (err, res){
				res.status.should.equal(404);
				done();
			});
		});

	});

	describe('Test Views', function () {
	
		it('View All : PASS', function (done) {
			supertest(app).
			get('/testview').
			expect(200).
			end(function (err, res){
				res.status.should.equal(200);
				done();
			});
		});
	
		it('View ID : PASS', function (done) {
			supertest(app).
			get('/testview/test-one').
			expect(200).
			end(function (err, res){
				res.status.should.equal(200);
				done();
			});
		});
	
		it('View ID : FAIL', function (done) {
			supertest(app).
			get('/testview/1').
			expect(404).
			end(function (err, res){
				res.status.should.equal(404);
				done();
			});
		});

	});

});
