import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('Visit Practice Automation Site', () => {
    cy.visit('http://practice.automationtesting.in/my-account/')

})

And('User log-in using username and password', (dataTables) => {
    dataTables.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    });

})


When('User click on submit button', () => {
    cy.get('[name="login"]').click()
    cy.wait(2000)
})

Then('Dashoard sholud be visible', () => {
    cy.get('li.is-active a').should('have.text', 'Dashboard')
})




And('User log-ins using {word} and {word}', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)

})


Then('Dashboard sholud be visibles', () => {
    cy.get('li.is-active a').should('have.text', 'Dashboard')
})

