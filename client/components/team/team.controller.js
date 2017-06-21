export default class TeamController {
  constructor($state, TeamsService) {
    this.$state = $state;
    this.teamsService = TeamsService;
  }

  /**
   * Navigates to main page
   * return nothing
   */
  goToHome() {
    this.$state.go('teams');
  }

  /**
   * Deletes this team
   * @param { string } id - team id
   * @return nothing
   */
  delete() {
    console.log('inside TeamController.delete');
    this.teamsService.deleteTeam(this.teamData._id)
                    .then(() => this.$state.go('teams'));
  }
}

TeamController.$inject = ['$state', 'TeamsService'];