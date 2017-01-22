'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var expCtrlStub = {
  index: 'expCtrl.index',
  show: 'expCtrl.show',
  create: 'expCtrl.create',
  upsert: 'expCtrl.upsert',
  patch: 'expCtrl.patch',
  destroy: 'expCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var expIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './exp.controller': expCtrlStub
});

describe('Exp API Router:', function() {
  it('should return an express router instance', function() {
    expect(expIndex).to.equal(routerStub);
  });

  describe('GET /api/exps', function() {
    it('should route to exp.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'expCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/exps/:id', function() {
    it('should route to exp.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'expCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/exps', function() {
    it('should route to exp.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'expCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/exps/:id', function() {
    it('should route to exp.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'expCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/exps/:id', function() {
    it('should route to exp.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'expCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/exps/:id', function() {
    it('should route to exp.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'expCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
