require ('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => 
{

    it('Mouse Hover' , ()=>{
        cy.visit("https://demo.opencart.com/")

        cy.get('body>main:nth-child(3) >div:nth-child(1) >nav:nth-child(1) >div:nth-child(3) >ul:nth-child(1) >li:nth-child(1) > div:nth-child(2) >div:nth-child(1) >ul:nth-child(1) >li:nth-child(2) >a:nth-child(1)')
        .should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('body>main:nth-child(3) >div:nth-child(1) >nav:nth-child(1) >div:nth-child(3) >ul:nth-child(1) >li:nth-child(1) > div:nth-child(2) >div:nth-child(1) >ul:nth-child(1) >li:nth-child(2) >a:nth-child(1)')
        .should('be.visible')
            
      }) 
      
    it('Right click' , ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        /* //Approach 1
        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-icon-copy > span').should('be.visible')*/

        //Approach 2
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')        
        
      })

    it('Double click' , ()=>{
        cy.get("element css ").trigger('dblclick') // approach1        
        cy.get("element css ").dblclick() // approach2
      })

    it('Drag and drop ' , ()=>{
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

      cy.get('#box6').drag('#box106')     
          
      })

    it.only('Scrolling Page' , ()=>{
      cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
      
      cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView()
      
          
      })
   
  })

  
