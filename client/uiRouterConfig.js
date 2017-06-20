export default function uiRouterConfig($stateProvider, $urlRouterProvider) {
  const teams = {
    name: 'teams',
    url: '/',
    component: 'teams',
    resolve: {
      teamsData: TeamsService => TeamsService.getTeams()
    }
  };

  // const team = {
  //   name: 'team',
  //   url: '/teams/{teamId}',
  //   component: 'team',
  //   resolve: {
  //     teamData: (TeamsService, $transition$) => TeamsService.getTeam($transition$.params().teamId)
  //   }
  // };

  const create = {
    name: 'create',
    url: '/create',
    component: 'create'
  };

  $stateProvider.state(teams);
  $stateProvider.state(create);
  $urlRouterProvider.otherwise('/');
}