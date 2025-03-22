// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************


// cypress/support/component.ts

import { mount } from 'cypress/react';
import './commands'; // optional if you have custom commands

// Make the mount function available globally
Cypress.Commands.add('mount', mount);


// cy.mount(<MyComponent />)
// TypeScript support for "cy.mount()"
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

