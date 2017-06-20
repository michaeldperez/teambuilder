import TeamsController from './teams.controller';
import teamsTemplate   from './teams.html';

const TeamsComponent = {
  bindings: {
    teamsData: '<'
  },
  template: teamsTemplate,
  controller: TeamsController
};

export default TeamsComponent;