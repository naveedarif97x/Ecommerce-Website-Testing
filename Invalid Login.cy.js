/// <reference types="Cypress"/>

describe("Login", ()=>{
    it("Invalid Credentials", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form'] h2").should("be.visible")

        cy.get("input[data-qa='login-email']").type("naveed90009@gmail.com")
        cy.get("input[placeholder='Password']").type("Hooka")
        cy.get("button[data-qa='login-button']").click()

        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)")
        .contains("Your email or password is incorrect!")
    })
})