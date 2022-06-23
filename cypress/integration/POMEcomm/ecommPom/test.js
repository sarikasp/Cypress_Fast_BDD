import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import Product from '../../POM/HomePage'

let productLst = new Product()

Given('Open E-Commerce Site with POM', () => {
    productLst.visitUrl('https://rahulshettyacademy.com/seleniumPractise/#/')

})

And('Search product which is starts from br with POM', () => {
    productLst.searchProduct('br')
})


And('Add to cart Brinjal with POM', () => {
    productLst.selectProduct('Brinjal')
})


When('Place order and select country with POM', () => {
    productLst.addProduct()
})

Then('Validate the Thank you message with POM', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})

