import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import uiRouterConfig  from './uiRouterConfig';
import TeamsController from './components/teams/teams.controller';
import TeamsComponent  from './components/teams/teams.component';
import TeamsService    from './components/teams/teams.service';

const app = angular.module('teambuilder', [uiRouter])
                   .controller('TeamsController', TeamsController)
                   .component('teams', TeamsComponent)
                   .service('TeamsService', TeamsService)
                   .config(uiRouterConfig);

export default app;