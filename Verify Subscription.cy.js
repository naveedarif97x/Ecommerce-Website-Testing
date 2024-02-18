/// <reference types="Cypress"/>

describe("Verfity Subscription", ()=>{
    it("Subscription", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.scrollTo("bottom")
        cy.get("div[class='single-widget'] h2").contains("Subscription")

        cy.get("#susbscribe_email").type("naveedarif98@gmail.com")
        cy.get(".fa.fa-arrow-circle-o-right").click()
    })
})