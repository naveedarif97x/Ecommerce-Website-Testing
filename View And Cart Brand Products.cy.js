/// <reference types="Cypress"/>

describe("View and cart", ()=>{
    it("View cart", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/products']").click()

        cy.get("div[class='brands_products'] h2").contains("Brands")
        cy.get("a[href='/brand_products/Polo']").click()
        cy.get(".title.text-center").should("be.visible")

        cy.get("a[href='/brand_products/H&M']").click()
        cy.get(".title.text-center").should("be.visible")
    })
})