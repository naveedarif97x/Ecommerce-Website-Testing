/// <reference types="Cypress"/>

describe("Login", ()=>{
    it("Valid credentials",()=>{
        cy.visit("https://automationexercise.com/")

        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form'] h2").should("be.visible")

        cy.get("input[data-qa='login-email']").type("naveedarif98@gmail.com")
        cy.get("input[placeholder='Password']").type("Hookabar98@")
        cy.get("button[data-qa='login-button']").click()

        cy.get("ul[class='nav navbar-nav'] li a b").contains("Naveed")
    })
})