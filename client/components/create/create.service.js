// Just for practice. This should be in teams.service.js

export default class CreateService {
  constructor($http) {
    this.$http = $http;
  }

  /**
   * Creates a team
   * @param { object } team - team object
   * @return { promsie } null promise
   */
  create(team) {
    return this.$http.post('/teams', team);
  }
}

CreateService.$inject = ['$http'];