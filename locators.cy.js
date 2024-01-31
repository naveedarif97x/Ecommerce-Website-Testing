/// <reference types="Cypress" />

describe("Css locators", ()=>{
    it.skip("First locator", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name=username]").type("Admin")
        cy.get("[name=password]").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("a").should("have.length",14)
    })

    it("Verification", ()=>{
        cy.visit("https://www.automationexercise.com/test_cases")
    })
})