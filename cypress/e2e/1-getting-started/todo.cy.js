// cypress/e2e/todo.cy.js

describe('To-Do List App', () => {
  beforeEach(() => {
    cy.visit('index.html'); // Adjust the path if your HTML file is in a different location
  });

  it('should load the app', () => {
    cy.contains('To-Do List').should('be.visible');
  });

  it('should add a new task', () => {
    const task = 'Learn Cypress';
    cy.get('#new-task').type(task);
    cy.contains('Add Task').click();
    cy.get('#task-list').should('contain', task);
  });

  it('should complete a task', () => {
    const task = 'Learn Cypress';
    cy.get('#new-task').type(task);
    cy.contains('Add Task').click();
    cy.contains(task).parent().find('.complete-button').click();
    cy.contains(task).parent().should('have.class', 'completed');
  });

  it('should delete a task', () => {
    const task = 'Learn Cypress';
    cy.get('#new-task').type(task);
    cy.contains('Add Task').click();
    cy.contains(task).parent().find('button:contains("Delete")').click();
    cy.get('#task-list').should('not.contain', task);
  });
});
