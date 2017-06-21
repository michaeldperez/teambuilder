import memberTemplate from './member.html';

const MemberComponent = {
  bindings: {
    firstname: '@',
    lastname: '@',
    email: '@',
    jobtitle: '@'
  },
  template: memberTemplate
};

export default MemberComponent;
