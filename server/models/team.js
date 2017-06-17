import { ObjectId } from 'mongodb';

export default class Team {
  constructor(db) {
    this.db = db;
  }

  /**
   * Returns all teams from database
   * @param { string } collectionName - name of database collection
   * @return { promise } teams - promise resolved to an array of all team documents
   */
  all(collectionName) {
    return this.db.get()
                  .collection(collectionName)
                  .find()
                  .toArray();
  }

  /**
   * Returns a specific team by id
   * @param { string } collectionName - name of database collection
   * @param { string } id - id of team in database
   * @return { promise } team - promise resolved to team document
   */
  get(collectionName, id) {
    return this.db.get()
                  .collection(collectionName)
                  .findOne({_id: new ObjectId(id)})
  }
}