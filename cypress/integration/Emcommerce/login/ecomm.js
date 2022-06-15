import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('Visit Orange HRM Site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.log('test1')
})

And('Fill the Username', () => {
    cy.get('[id="txtUsername"]').type('Admin')
    cy.log('test2')
})


And('Fill the Password', () => {
    cy.get('[id="txtPassword"]').type('admin123')
    cy.log('test3')
})


When('Click on login Button', () => {
    cy.get('#btnLogin').click()
    cy.log('test4')
})

Then('Validate the Dashboard', () => {
    cy.get('.head h1').should('have.text', 'Dashboard')
    cy.log('test5')
})



// Invalid


And('Fill the Invalid Username', ()=>{
    cy.get('[id="txtUsername"]').type('Adn')
})


And('Fill the Invalid Password', ()=>{
    cy.get('[id="txtPassword"]').type('admin')
})


Then('Validate the Error Message', ()=>{
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})

