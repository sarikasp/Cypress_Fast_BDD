import { Given, Then } from "cypress-cucumber-preprocessor/steps"

let id
Given('User sent the request for get multiple users list', () => {

    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUsers')

})

Then('Users list should be displayed', () => {
    cy.get('@getUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq("OK")
        expect(response.body.page).to.eq(2)
    })

})


Given('User sent the request to create new user with {word} and {word}', (name, job) => {

    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
            "name": name,
            "job": job
        }
    }).as('createUsers')

})

Then('Users should be created with {word} and {word}', (name, job) => {

    cy.get('@createUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(201)
        expect(response.statusText).to.eq("Created")
        expect(response.body.name).to.eqls(name)
        expect(response.body.job).to.eqls(job)
        id = response.body.id
    })
})


Given('User sent the request to update existing user with {word} and {word}', (name, job) => {
    cy.request({
        method: "PUT",
        url: `https://reqres.in/api/users/${id}`,
        body: {
            "name": name,
            "job": job
        }
    }).as('updateUsers')
})


Then('Users should be updated with {word} and {word}', (name, job) => {

    cy.get('@updateUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eqls(name)
        expect(response.body.job).to.eqls(job)
    })
})

