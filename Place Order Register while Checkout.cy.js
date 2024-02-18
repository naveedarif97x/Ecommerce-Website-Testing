/// <reference types="Cypress"/>

describe("Place Order", ()=>{
    it("While Registering", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/view_cart']")
        .click()

        cy.get(".active").contains("Shopping Cart")
        cy.get(".btn.btn-default.check_out").click()

        cy.get("body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1")
        .click()

        cy.get("input[placeholder='Name']").type("Umair")
        cy.get("input[data-qa='signup-email']").type("umairarif9009@gmail.com")
        cy.get("button[data-qa='signup-button']").click()

        cy.get("#id_gender1").check()
        cy.get("#name").type("Umair")
        cy.get("#password").type("Hookabar98@")
        cy.get("#days").select("26")
        cy.get("#months").select("July")
        cy.get("#years").select("1997")
        cy.get("#newsletter").check()
        cy.get("#optin").check()

        cy.get("#first_name").type("Umair")
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


        cy.get("h2[class='title text-center'] b").contains("Account created")
        cy.get(".btn.btn-primary").click()

        cy.get("ul[class='nav navbar-nav'] li a b").contains("Umair")
        cy.get("body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")
        .click()

        cy.get(".btn.btn-default.check_out").click()

        cy.get("ul[id='address_delivery'] li:nth-child(5)").contains("Lahore")

        cy.get("textarea[name='message']").type("Yes its me")
        cy.get(".btn.btn-default.check_out").click()

        cy.get("input[name='name_on_card']").type("Naveed")
        cy.get("input[name='card_number']").type("122324")
        cy.get("input[placeholder='ex. 311']").type("911")
        cy.get("input[placeholder='MM']").type("26/8/2024")
        cy.get("input[placeholder='YYYY']").type("2026")
        cy.get("#submit").click()

        cy.get("h2[class='title text-center'] b").should("be.visible")
    })
})