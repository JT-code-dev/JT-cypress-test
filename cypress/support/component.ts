import { mount } from 'cypress/react';
import './commands';

// FIXED IMPORT PATHS
import '../../client/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../client/src/App.css';

Cypress.Commands.add('mount', mount);

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

