/// <reference types="Cypress"/>

describe("Registertaion Suite", ()=>{
    it("Register User", ()=>{
        cy.visit("https://automationexercise.com/")

        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] h2").should("be.visible")

        cy.get("input[placeholder='Name']").type("Naveed")
        cy.get("input[data-qa='signup-email']").type("naveedarif98@gmail.com")
        cy.get("button[data-qa='signup-button']").click()

        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > b:nth-child(1)")
        .should("be.visible")

        cy.get("#id_gender1").check()
        cy.get("#name").type("Naveed")
        cy.get("#password").type("Hookabar98@")
        cy.get("#days").select("26")
        cy.get("#months").select("July")
        cy.get("#years").select("1997")
        cy.get("#newsletter").check()
        cy.get("#optin").check()

        cy.get("#first_name").type("Naveed")
        cy.get("#last_name").type("Arif")
        cy.get("#company").type("Devsinc")
        cy.get("#address1").type("Pir Ghazi")
        cy.get("#address2").type("Lahore")
        cy.get("#country").select("India")
        cy.get("#state").type("Punjab")
        cy.get("#city").type("Lahore")
        cy.get("#zipcode").type("9221")
        cy.get("#mobile_number").type("+923140996268"
        )
        cy.get("button[data-qa='create-account']").click()
        cy.get("h2[class='title text-center'] b").should("be.visible")
        cy.get(".btn.btn-primary").click()
        cy.get("ul[class='nav navbar-nav'] li a b").contains("Naveed")
    })
})