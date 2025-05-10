describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    Cypress.Commands.add('cadastrar', (nome, email, senha) => { 
      cy.get('[data-test="input-name"]').type(nome);
      cy.get('[data-test="input-email"]').type(email);
      cy.get('[data-test="input-password"]').type(senha);
      cy.get('[data-test="input-confirm-password"]').type(senha);
      cy.get('[data-test="submit-button"]').click();
   })
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Pietro da Silva');
    cy.get('[data-test="input-email"]').type('pietro@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})