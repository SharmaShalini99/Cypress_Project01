describe('Login' , ()=> {
    
    it.skip('Test1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('LoginCredentials').then((data)=>{

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
                .should('have.text',data.expected)
        })        
    })
    
    it('Validate invalid login',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover').click()  
        
        cy.fixture('LoginCredentials').then((data)=>{

            cy.get("#ap_email").type(data.emailID)
            cy.get('.a-button-inner > #continue').click()
            cy.get("#ap_password").type(data.emailpassword)
            cy.get("#signInSubmit").click()
           // cy.get('.a-list-item').should('eq','Your password is incorrect')
           // cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
        })        
    })
})