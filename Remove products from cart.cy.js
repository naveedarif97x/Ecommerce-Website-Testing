/// <reference types="Cypress"/>

describe("Remove products", ()=>{
    it("Remove from cart", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)")
        .click({force:true})

        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1")
        .click()

        cy.get(".fa.fa-times").click()
        cy.get("p[class='text-center'] b").should("be.visible")
    })
})