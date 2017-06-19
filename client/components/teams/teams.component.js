import TeamsController from './teams.controller';
import template        from './teams.html';

const TeamsComponent = {
  bindings: {
    teamsData: '<'
  },
  template,
  controller: TeamsController
};

export default TeamsComponent;