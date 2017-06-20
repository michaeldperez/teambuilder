import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import uiRouterConfig  from './uiRouterConfig';
import TeamsController from './components/teams/teams.controller';
import TeamsComponent  from './components/teams/teams.component';
import TeamsService    from './components/teams/teams.service';
import CreateController  from './components/create/create.controller';
import CreateComponent   from './components/create/create.component';
import CreateService     from './components/create/create.service';

const app = angular.module('teambuilder', [uiRouter])
                   .controller('TeamsController', TeamsController)
                   .controller('CreateController', CreateController)
                   .component('teams', TeamsComponent)
                   .component('create', CreateComponent)
                   .service('TeamsService', TeamsService)
                   .service('CreateService', CreateService)
                   .config(uiRouterConfig);

export default app;