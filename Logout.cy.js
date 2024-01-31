/// <reference types="Cypress" />

describe("Logout Suite", ()=>{
    it("Logout user", ()=>{
        cy.visit("https://automationexercise.com/")

        cy.get("a[href='/']>img").should("be.visible")
        cy.get("a[href='/login']").click()

        cy.get("div[class='login-form'] h2").should("have.text","Login to your account")

        cy.get("input[data-qa='login-email']").type("naveedarif98@gmail.com")
        cy.get("input[placeholder='Password']").type("Hookabar98@")
        cy.get("button[data-qa='login-button']").click()

        cy.get("ul[class='nav navbar-nav'] li a b").should("have.text","Naveed Arif")

        cy.get("a[href='/logout']").click()

        cy.get("div[class='login-form'] h2").should("have.text","Login to your account")
    })
})