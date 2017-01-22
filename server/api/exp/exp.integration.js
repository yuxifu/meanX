'use strict';

var app = require('../..');
import request from 'supertest';

var newExp;

describe('Exp API:', function() {
  describe('GET /api/exps', function() {
    var exps;

    beforeEach(function(done) {
      request(app)
        .get('/api/exps')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          exps = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(exps).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/exps', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/exps')
        .send({
          name: 'New Exp',
          info: 'This is the brand new exp!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newExp = res.body;
          done();
        });
    });

    it('should respond with the newly created exp', function() {
      expect(newExp.name).to.equal('New Exp');
      expect(newExp.info).to.equal('This is the brand new exp!!!');
    });
  });

  describe('GET /api/exps/:id', function() {
    var exp;

    beforeEach(function(done) {
      request(app)
        .get(`/api/exps/${newExp._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          exp = res.body;
          done();
        });
    });

    afterEach(function() {
      exp = {};
    });

    it('should respond with the requested exp', function() {
      expect(exp.name).to.equal('New Exp');
      expect(exp.info).to.equal('This is the brand new exp!!!');
    });
  });

  describe('PUT /api/exps/:id', function() {
    var updatedExp;

    beforeEach(function(done) {
      request(app)
        .put(`/api/exps/${newExp._id}`)
        .send({
          name: 'Updated Exp',
          info: 'This is the updated exp!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedExp = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedExp = {};
    });

    it('should respond with the updated exp', function() {
      expect(updatedExp.name).to.equal('Updated Exp');
      expect(updatedExp.info).to.equal('This is the updated exp!!!');
    });

    it('should respond with the updated exp on a subsequent GET', function(done) {
      request(app)
        .get(`/api/exps/${newExp._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let exp = res.body;

          expect(exp.name).to.equal('Updated Exp');
          expect(exp.info).to.equal('This is the updated exp!!!');

          done();
        });
    });
  });

  describe('PATCH /api/exps/:id', function() {
    var patchedExp;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/exps/${newExp._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Exp' },
          { op: 'replace', path: '/info', value: 'This is the patched exp!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedExp = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedExp = {};
    });

    it('should respond with the patched exp', function() {
      expect(patchedExp.name).to.equal('Patched Exp');
      expect(patchedExp.info).to.equal('This is the patched exp!!!');
    });
  });

  describe('DELETE /api/exps/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/exps/${newExp._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when exp does not exist', function(done) {
      request(app)
        .delete(`/api/exps/${newExp._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
