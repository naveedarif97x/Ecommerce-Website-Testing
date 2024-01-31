/// <reference types="Cypress" />

describe("My first cypress test", ()=>{
    it("Valid login details", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
    })

    it("Invalid login details", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","orangedemo")
    })
})