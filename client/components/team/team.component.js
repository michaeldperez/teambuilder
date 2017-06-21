import TeamController from './team.controller';
import teamTemplate   from './team.html';

const TeamComponent = {
  bindings: {
    teamData: '<'
  },
  template: teamTemplate,
  controller: TeamController
};

export default TeamComponent;