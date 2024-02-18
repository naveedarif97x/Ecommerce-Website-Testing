/// <reference types="Cypress"/>

describe("Contact Us", ()=>{
    it("Form", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/contact_us']").click()
        cy.get("div[class='contact-form'] h2[class='title text-center']").should("be.visible")

        cy.get("input[placeholder='Name']").type("Naveed")
        cy.get("input[placeholder='Email']").type("naveedarif98@gmail.com")
        cy.get("input[placeholder='Subject']").type("Complaint")
        cy.get("#message").type("Not working")
        //cy.get("input[name='upload_file']").click()
        cy.get("input[value='Submit']").click()
        cy.get(".status.alert.alert-success").contains("Success! Your details have been submitted successfully.")
        
        cy.get("a[class='btn btn-success'] span").click()
        cy.get("img[alt='Website for automation practice']").should("be.visible")
    })
})