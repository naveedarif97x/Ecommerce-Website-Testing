/// <reference types="Cypress"/>

describe("View Categories",()=>{
    it("View",()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)")
        .contains("Category")

        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1")
        .click()

        cy.get("a[href='/category_products/1']").click({force:true})

        cy.get(".title.text-center").contains("Women - Dress Products")

        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)")
        .click()
        cy.get("div[id='Men'] li:nth-child(1)").click()

        //cy.get(".title.text-center").contains("Men - Tshirts Products")
    })
})