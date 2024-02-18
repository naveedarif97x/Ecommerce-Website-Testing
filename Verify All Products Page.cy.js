/// <reference types="Cypress"/>

describe("All Products Page", ()=>{
    it("Products Page", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").contains("All Products")
        cy.get("a[href='/product_details/1']").click()
        cy.get("div[class='product-information'] h2").contains("Blue Top")
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(6)")
        .contains("In Stock")
    })
})