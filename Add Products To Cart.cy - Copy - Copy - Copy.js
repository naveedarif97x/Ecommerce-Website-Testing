/// <reference types="Cypress"/>

describe("Add to cart", ()=>{
    it("Cart", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get("img[alt='Website for automation practice']").should("be.visible")

        cy.get("a[href='/products']").click()
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)")
        .click({force:true})

        cy.get(".btn.btn-success.close-modal.btn-block").click()

        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3")
        .click({force:true})
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1")
        .click({force:true})

        cy.get("tr[id='product-1'] td[class='cart_price'] p").contains("Rs. 500")
        cy.get("tr[id='product-1'] button[class='disabled']").contains("1")

        cy.get("tr[id='product-2'] td[class='cart_price'] p").contains("Rs. 400")
        cy.get("tr[id='product-2'] button[class='disabled']").contains("1")
        


    })
})