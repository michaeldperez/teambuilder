import { ObjectId } from 'mongodb';

export default class Team {
  constructor(db) {
    this.db = db;
  }

  all(collectionName) {
    return this.db.get()
                  .collection(collectionName)
                  .find()
                  .toArray();
  }

  get(collectionName, id) {
    return this.db.get()
                  .collection(collectionName)
                  .findOne({_id: new ObjectId(id)})
  }
}