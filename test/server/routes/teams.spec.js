import { internet, name } from 'faker';
import { expect }         from 'chai';
import sinon              from 'sinon';
import express            from 'express';
import Team               from '../../../server/models/team';
import Database           from '../../../server/db/db';

describe('teams routes tests', function() {
  let team
    , sampleTeams
    , sandbox
    , router;

  const createMember = () => ({
    firstname: name.firstName(), lastname: name.lastName(), email: internet.email(), jobtitle: name.jobTitle()
  });

  const stubResSend = (expected, done) => {
    return {
      send(data) {
        expect(data).to.be.eql(expected);
        done();
      }
    };
  };

  beforeEach(function() {
    sampleTeams = [{
      name: 'Generic Team 5',
      members: [createMember(), createMember(), createMember()]
    }];
    sandbox = sinon.sandbox.create();
    sandbox.stub(express, 'Router').returns({
      get: sandbox.spy(),
      post: sandbox.spy(),
      delete: sandbox.spy()
    });

    team = new Team({});
    router = require('../../../server/routes/teams')(team);

  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should register URI / for get', function() {
    expect(router.get.calledWith('/', sandbox.match.any)).to.be.true;
  });

  it('get / handler should call models all method and return result', function(done) {
    sandbox.stub(Team.prototype, 'all').resolves(sampleTeams);

    const req = {}
        , res = stubResSend(sampleTeams, done)
        , registeredCallback = router.get.firstCall.args[1]; // router.get('/', THIS)

    registeredCallback(req, res);
  });

  it('should register URI /:id for get', function() {
    expect(router.get.calledWith('/:id', sandbox.match.any)).to.be.true
  });

  it('get /:id handler should call models get and return a team', function(done) {
    sandbox.stub(Team.prototype, 'get').resolves(sampleTeams[0]);

    const req = {params: {id: 1}}
        , res = stubResSend(sampleTeams[0], done)
        , registeredCallback = router.get.secondCall.args[1];

    registeredCallback(req, res);
  });

  it('should register URI / for post', function() {
    expect(router.post.calledWith('/', sandbox.match.any)).to.be.true;
  });

  it('post / handler should call models add method', function(done) {
    sandbox.stub(Team.prototype, 'add').resolves(null);

    const req = {body: sampleTeams[0]}
        , res = stubResSend('team added', done)
        , registeredCallback = router.post.firstCall.args[1];

    registeredCallback(req, res);
  });

  it('should register URI /:id for delete', function() {
    expect(router.delete.calledWith('/:id', sandbox.match.any)).to.be.true;
  });

  it('delete /:id handler should call models delete method', function(done) {
    sandbox.stub(Team.prototype, 'delete').resolves(null);

    const req = {params: {id: 1}}
        , res = stubResSend('team deleted', done)
        , registeredCallback = router.delete.firstCall.args[1];

    registeredCallback(req, res);
  });
});