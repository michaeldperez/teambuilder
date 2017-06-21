import angular           from 'angular';
import uiRouter          from 'angular-ui-router';
import uiRouterConfig    from './uiRouterConfig';
import TeamsController   from './components/teams/teams.controller';
import TeamsComponent    from './components/teams/teams.component';
import TeamsService      from './components/teams/teams.service';
import TeamController    from './components/team/team.controller';
import TeamComponent     from './components/team/team.component';
import MemberComponent   from './components/member/member.component';
import CreateController  from './components/create/create.controller';
import CreateComponent   from './components/create/create.component';
import CreateService     from './components/create/create.service';

const app = angular.module('teambuilder', [uiRouter])
                   .controller('TeamsController', TeamsController)
                   .controller('TeamController', TeamController)
                   .controller('CreateController', CreateController)
                   .component('teams', TeamsComponent)
                   .component('team', TeamComponent)
                   .component('member', MemberComponent)
                   .component('create', CreateComponent)
                   .service('TeamsService', TeamsService)
                   .service('CreateService', CreateService)
                   .config(uiRouterConfig);

export default app;