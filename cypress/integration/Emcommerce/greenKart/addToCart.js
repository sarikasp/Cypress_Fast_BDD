import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"


Given('Open E-Commerce Site', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.log('test1')
})

And('Search product which is starts from ca', () => {
    cy.get('[class="search-keyword"]').type('ca')
    cy.get('[type="submit"]').click()
    cy.log('test2')
})


And('Add to cart Cashews', () => {
    cy.get('h4[class="product-name"]').each((el, index) => {
        cy.log(el.text())
        if (el.text().replace(' - 1 Kg', ' ').trim() == 'Cashews') {
            cy.get('[class="product-action"] button').eq(index).click()
        }
    })
    cy.log('test3')
})


When('Place order and select country', () => {
    cy.get('img[alt="Cart"]').click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').click()
    cy.get('button').click()
    cy.log('test4')
})

Then('Validate the Thank you message', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
    cy.log('test5')
})

