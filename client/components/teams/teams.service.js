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

  /**
   * Retrieves a specific team by ID
   * @param { string } id - id of team
   * @return { object } team - team object
   */
  getTeam(id) {
    return this.$http.get(`/teams/${id}`)
                     .then(response => response.data);
  }

  /**
   * Deletes a given team by ID
   * @param { string } id - id of team
   * @return nothing
   */
  deleteTeam(id) {
    return this.$http.delete(`/teams/${id}`);
  }
}

TeamsService.$inject = ['$http'];