export default class CreateController {
  constructor($state, CreateService) {
    this.$state = $state;
    this.createService = CreateService;
  }

  $onInit() {
    this.team = {};
  }

  /**
   * Returns the full name of a member
   * @param { object } member - member object
   * @return { string } fullname - first and last name of member
   */
  getFullName(member) {
    return `${member.firstname} ${member.lastname}`;
  }

  /**
   * Creates a team
   * @return nothing
   */
  createTeam() {
    this.team.members = [this.member1, this.member2, this.member3];
    this.team.createdAt = new Date();

    return this.createService.create(this.team)
                           .then(() => this.$state.go('teams'));
  }
}

CreateController.$inject = ['$state', 'CreateService'];