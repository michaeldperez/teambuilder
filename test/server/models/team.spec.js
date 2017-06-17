import { expect }         from 'chai';
import { ObjectId }       from 'mongodb';
import { internet, name } from 'faker';
import Database           from '../../../server/db/db';
import Team               from '../../../server/models/team';

describe('team model tests', function() {
  let db
    , team
    , sampleTeam
    , sampleTeams;

  before(function(done) {
    db = new Database();
    db.connect('mongodb://localhost/teambuilder')
      .then(() => {
        team = new Team(db);
        done();
      });
  });

  after(function() {
    db.close();
  });

  const id = idValue => new ObjectId(idValue);
  const removeObjectId = data => data.map(datum => {
    const {_id, ...rest} = datum;
    return rest;
  });
  const createMember = () => ({
    firstname: name.firstName(), lastname: name.lastName(), email: internet.email(), jobtitle: name.jobTitle()
  });

  beforeEach(function(done) {
    sampleTeam = {name: 'Generic Team 0', members: [
      createMember(),
      createMember(),
      createMember()
    ]};

    sampleTeams = [
      {_id: id('123456789123'), name: 'Generic Team 1', members: [
        createMember(),
        createMember(),
        createMember()
      ]},
      {_id: id('123456789456'), name: 'Generic Team 2', members: [
        createMember(),
        createMember(),
        createMember()
      ]},
      {_id: id('123456789789'), name: 'Generic Team 3', members: [
        createMember(),
        createMember(),
        createMember()
      ]},
    ];

    db.get()
      .collection('teams')
      .insertMany(sampleTeams)
      .then(() => done())
      .catch(err => {
        console.log(`Error seeding database: ${err.message}`);
        done();
      });

  });

  afterEach(function(done) {
    db.get()
      .collection('teams')
      .drop()
      .then(() => done())
      .catch(err => {
        console.log(`Error dropping database: ${err.message}`);
      });
  });

  it('all should return all the teams', function(done) {
    team.all('teams')
        .then(teams => {
          teams = removeObjectId(teams);
          sampleTeams = removeObjectId(sampleTeams);
          expect(teams).to.be.eql(sampleTeams);
          done();
        })
        .catch(err => {
          console.log(`An error occurred retrieving teams: ${err}`);
          done();
        });
  });

  it('get should return task with given id', function(done) {
    team.get('teams', '123456789123')
        .then(team => {
          expect(team.name).to.equal('Generic Team 1');
          done();
        })
        .catch(err => {
          console.log(`An error occurred retrieving team: ${err.message}`);
        });
  });

  it('get should return null for non-existent team', function(done) {
    team.get('teams', '000000000000')
        .then(team => {
          expect(team).to.be.null;
          done();
        })
        .catch(err => {
          console.log(`An erro occurred retrieving team: ${err.message}`);
        });
  });
});