import { MongoClient } from 'mongodb';

export default class Database {
  constructor() {
    this.connection = null;
  }

  /**
   * Returns database connection
   * @return { object } database connection
   */
  get() {
    return this.connection;
  }

  /**
   * Closes database connection
   * @return nothing
   */
  close() {
    if (this.connection) {
      this.connection.close();
      this.connnection = null;
    }
  }

  /**
   * Connects to a given database
   * @param { string } dbName - database name
   * @return nothing
   */
  connect(dbName) {
    const self = this;
    return MongoClient.connect(dbName)
               .then(db => {
                  self.connection = db;
               });
  }
}