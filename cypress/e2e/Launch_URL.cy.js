/// <reference types="cypress"/>
describe("Launch website" ,() => {  
    

    it.only('Open URL',()=>{
        cy.visit('https://www.amazon.in/' )   
        //cy.screenshot("amazonHomePg")     
        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    it('Open URL',()=>{
        cy.visit('https://www.kalyanjewellers.net/' ) 
        
        cy.title().should('eq', 'Kalyan Jewellers | Buy Online Gold, Diamonds & Necklace Jewellery')
        /*cy.get(':nth-child(7) > .nav-link')
        .should('be.visible') 
        cy.get(':nth-child(7) > .nav-link').trigger('mouseover')        
        cy.get('.two-cols [title="Chains"]')         
        .click()*/ 
    })
     
    
})