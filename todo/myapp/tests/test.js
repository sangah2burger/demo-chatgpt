import request from 'supertest';
import app from '../app.js';

describe('GET /', function() {
    it('responds with 200', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /about', function() {
    it('responds with 200', function(done) {
        request(app)
            .get('/about')
            .expect(200, done);
    });
});

describe('GET /todo', function() {
    it('responds with 200', function(done) {
        request(app)
            .get('/todo')
            .expect(200, done);
    });
});