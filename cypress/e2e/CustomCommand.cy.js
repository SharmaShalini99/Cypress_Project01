describe('CustomCommandsDemo' , ()=> {
    it.only('Login command',()=>{
        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink('Log in')
        cy.wait(3000)
        cy.LoginApp("testing@gmail.com","test123")
        cy.
        cy.get('.ico-account').should('have.text','My account')
        
    })
})