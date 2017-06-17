import { MongoClient } from 'mongodb';

export default class Database {
  constructor() {
    this.connection = null;
  }

  get() {
    return this.connection;
  }

  close() {
    if (this.connection) {
      this.connection.close();
      this.connnection = null;
    }
  }

  connect(dbName) {
    const self = this;
    return MongoClient.connect(dbName)
               .then(db => {
                  self.connection = db;
                  // return self.connection;
               });
  }
}