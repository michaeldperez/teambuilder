export default class TeamsService {
  constructor($http) {
    this.$http = $http;
  }

  /**
   * Retrieves all the teams from the server
   * @return { array } teams - array of teams
   */
  getTeams() {
    return this.$http.get('/teams')
                     .then(response => response.data);
  }
}

TeamsService.$inject = ['$http'];