/// <reference types="Cypress"/>

describe("Verify test case page", ()=>{
    it("Visibility of test case page", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("header[id='header'] li:nth-child(5) a:nth-child(1)").click()
        cy.get("h2[class='title text-center'] b").contains("Test Cases")
    })
})