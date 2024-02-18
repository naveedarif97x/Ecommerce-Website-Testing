/// <reference types="Cypress"/>

describe("Register Existing User", ()=>{
    it("Registeration", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")
        cy.get("a[href='/login']").click()

        cy.get("div[class='signup-form'] h2").should("be.visible")

        cy.get("input[placeholder='Name']").type("Naveed")
        cy.get("input[data-qa='signup-email']").type("naveedarif98@gmail.com")
        cy.get("button[data-qa='signup-button']").click()
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > p:nth-child(5)")
        .contains("Email Address already exist!")
    })
})