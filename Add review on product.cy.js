/// <reference types="Cypress"/>

describe("Add review", ()=>{
    it("Review", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should("be.visible")
        cy.get("a[href='/product_details/1']").contains("View Product")
        cy.get("a[href='#reviews']").should("be.visible")
        cy.get("#name").type("Naveed")
        cy.get("#email").type("naveedarif98@gmail.com")
        cy.get("#review").type("Yes Boss I am Servent of ALLAH")
        cy.get("#button-review").click()
        
    })
})