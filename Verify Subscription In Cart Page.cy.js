/// <reference types="Cypress"/>

describe("verify Subscription", ()=>{
    it("Cart Page",()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("header[id='header'] li:nth-child(3) a:nth-child(1)").click()

        cy.get("div[class='single-widget'] h2").should("be.visible")
        cy.get("#susbscribe_email").type("naveedarif98@gmail.com")
        cy.get("#subscribe").click()
    })
})