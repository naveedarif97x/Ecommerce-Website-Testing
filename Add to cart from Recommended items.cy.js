/// <reference types="Cypress"/>

describe("Add to cart from recommended items", ()=>{
    it("add", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("div[class='recommended_items'] h2[class='title text-center']").scrollTo("center")
    })
})