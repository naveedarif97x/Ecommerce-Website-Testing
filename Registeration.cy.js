/// <reference types="Cypress" />

describe("Registeration Suite", ()=>{
    it.skip("Register User", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get(".logo>a").should("be.visible")

        cy.get("a[href='/login']").click()
        cy.get(".signup-form>h2").should("have.text","New User Signup!")

        cy.get("[name='name']").type("Naveed")
        cy.get("input[data-qa='signup-email']").type("narif9475@gmail.com")
        cy.get("button[data-qa='signup-button']").click()

        cy.get(".login-form>h2").should("have.text","Enter Account Information")

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
        cy.get("#company").type("Devsic")
        cy.get("#address1").type("Pir Ghazi Road")
        cy.get("#address2").type("lahore")
        cy.get("#country").select("Canada")
        cy.get("#state").type("Punjab")
        cy.get("#city").type("Lahore")
        cy.get("#zipcode").type("0991")
        cy.get("#mobile_number").type("+491775405497")
        cy.get("button[data-qa='create-account']").click()

        cy.get("h2[class='title text-center'] b").should("have.text","Account Created!")
        cy.get(".btn.btn-primary").click()

        cy.wait(6000)
        cy.get("li:nth-child(10) a:nth-child(1)").should("have.text"," Logged in as NaveedNaveed")

        cy.get("a[href='/delete_account']").click()
        cy.get("h2[class='title text-center'] b").should("have.text","Account Deleted!")
        cy.get(".btn.btn-primary").click()
    })

    it("Register with existing data", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/']>img").should("exist")

        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] h2").should("have.text","New User Signup!")

        cy.get("input[placeholder='Name']").type("Naveed")
        cy.get("[data-qa='signup-email']").type("naveedarif98@gmail.com")
        cy.get("button[data-qa='signup-button']").click()

        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > p:nth-child(5").should(
            "have.text","Email Address already exist!")
    })
})