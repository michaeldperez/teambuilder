export default class TeamsController {
  constructor($state){
    this.$state = $state;
  }

  /**
   * Returns the number of members in a team
   * @param { array } members - a list of team members
   * @return { number } count - total count of members
   */
  countMembers(members) {
    return members.length;
  }

  /**
   * Navigates to add team page
   * @return nothing
   */
  goToAdd() {
    this.$state.go('add');
  }
}

TeamsController.$inject = ['$state'];