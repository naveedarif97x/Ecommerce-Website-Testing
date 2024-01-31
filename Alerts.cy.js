/// <reference types="Cypress" />

describe("Alerts", ()=>{
    it("Simple Alert", ()=>{
        cy.visit("https://demoqa.com/alerts")
        cy.get("#alertButton").click()
    })
})