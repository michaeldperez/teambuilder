import { expect } from 'chai';
import Database   from '../../server/db/db';


describe('db tests', function() {
  let db;

  beforeEach(function() {
    db = new Database();
  });

  it('should pass this canary test', function () {
    expect(true).to.be.true;
  });

  it('get should return null connection by default', function() {
    expect(db.get()).to.be.null;
  });

  it('close should set connection to null', function() {
    db.close();
    expect(db.connection).to.be.null;
  });

  it('close should close existing connection', function(done) {
    db.connection = {
      close: () => done()
    };

    db.close();

    expect(db.connection).to.be.null;
  });

  it('connect should set connection given valid database name', function(done) {
    db.connect('mongodb://localhost/teambuilder')
      .then(() => {
        expect(db.get().databaseName).to.equal('teambuilder');
        db.close();
        done();
      });
  });

  it('connect should reject invalid schema', function(done) {
    db.connect('badSchema://localhost/teambuilder')
      .catch(err => {
        expect(err).to.be.instanceof(Error);
        done();
      });
  });

  it('connect should reject invalid name', function(done) {
    db.connect('mongodb')
      .catch(err => {
        expect(err).to.be.instanceof(Error);
        done();
      });
  });
});