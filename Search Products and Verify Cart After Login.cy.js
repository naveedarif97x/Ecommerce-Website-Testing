/// <reference types="Cypress"/>

describe("Search Products", ()=>{
    it("Search and verify cart", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should("be.visible")
        cy.get("#search_product").type("Blue Top")
        cy.get("#submit_search").click()
        cy.get("div[class='overlay-content'] p").contains("Blue Top")
        cy.get("div[class='overlay-content'] a[class='btn btn-default add-to-cart']").click({force:true})

        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)")
        .click({force:true})

        cy.get("a[href='/product_details/1']").should("be.visible")

        cy.get("li:nth-child(4) a:nth-child(1)").click()
        cy.get("input[data-qa='login-email']").type("naveedarif98@gmail.com")
        cy.get("input[placeholder='Password']").type("Hookabar98@")
        cy.get("button[data-qa='login-button']").click()

        cy.get("body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1")
        .click()

        //cy.get("a[href='/product_details/1']").should("be.visible")
    })
})