/// <reference types="cypress" />

describe("Login Test Suite", ()=>{
    it.skip("Valid Credentials", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/']>img").should("be.visible")

        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form'] >h2").should("have.text","Login to your account")

        cy.get("input[data-qa='login-email']").type("naveedarif98@gmail.com")
        cy.get("input[placeholder='Password']").type("Hookabar98@")
        cy.get("button[data-qa='login-button']").click()

        cy.get("ul[class='nav navbar-nav'] li a b").should("have.text","Naveed Arif")

    })

    it("Invalid Details", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/']>img").should("be.visible")

        cy.get("a[href='/login']").click()

        cy.get("div[class='login-form'] h2").should("have.text","Login to your account")
        cy.get("input[data-qa='login-email']").type("naveedarif98@gmail.com")
        cy.get("input[placeholder='Password']").type("admin")

        cy.get("button[data-qa='login-button']").click()

        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)").should("have.text",
        "Your email or password is incorrect!")
    })
})