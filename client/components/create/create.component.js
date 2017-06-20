import CreateController from './create.controller';
import createTemplate   from './create.html';

const CreateComponent = {
  bindings: {
    team: '=',
    member1: '=',
    member2: '=',
    member3: '='
  },
  template: createTemplate,
  controller: CreateController
};

export default CreateComponent;