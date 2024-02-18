/// <reference types="Cypress"/>

describe("View in cart", ()=>{
    it("View", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/product_details/1']").click()
        cy.get("a[href='#reviews']").should("be.visible")

        cy.get("div[class='product-information'] h2").contains("Blue Top")
        cy.get("#quantity").clear().type("4")

        cy.get("button[type='button']").click()
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)")
        .click()

        cy.get("tr[id='product-1'] button[class='disabled']").contains("4")
    })
})