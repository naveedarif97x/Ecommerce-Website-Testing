/// <reference types="Cypress" />
describe("Cypress dropdowns", ()=>{
    it.skip("Select tag", ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html?src=homepage")
        cy.get("#zcf_address_country").select("Italy").should("have.value","Italy")
    })

    it.skip("Without select tag", ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Italy").type("{Enter}")

        cy.get("#select2-billing_country-container").should("have.text","Italy")
    })

    it("Dynamic Dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-title").contains("Delhi University").click()
        cy.get(".mw-page-title-main").contains("Delhi University")
    })
})