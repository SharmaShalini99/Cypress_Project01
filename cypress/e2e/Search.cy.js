/// <reference types="cypress"/>
describe("Search for products" ,() => {  
    beforeEach(() => {
        cy.visit('https://www.amazon.in/')
    })

    afterEach(()=>{
        cy.log("Test completed")
    })

    it('Validate the Page title',()=>{                
        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    it('Validate searched product page has opened', ()=>{
        
        cy.get('#twotabsearchtextbox').type('Laptop')
        cy.get('#nav-search-submit-button').click()
        cy.title().should('eq', 'Amazon.in : Laptop')
    })  
    
    it.only('Capture the url', ()=>{
        
        cy.get('#twotabsearchtextbox').type('Laptop')
        cy.get('#nav-search-submit-button').click()
        cy.title().should('eq', 'Amazon.in : Laptop')
        cy.url().then((url) => {
            cy.go('back')// home page
            cy.visit(url)
          })
        cy.title().should('eq', 'Amazon.in : Laptop')
    })
    
})