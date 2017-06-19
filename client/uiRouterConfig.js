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

  $stateProvider.state(teams);
  $urlRouterProvider.otherwise('/');
}