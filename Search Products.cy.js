/// <reference types="cypress"/>

describe("Search Products", ()=>{
    it("searching", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").contains("All Products")

        cy.get("#search_product").type("Blue Top")
        cy.get("#submit_search").click()
        cy.get(".title.text-center").contains("Searched Products")
    })
})