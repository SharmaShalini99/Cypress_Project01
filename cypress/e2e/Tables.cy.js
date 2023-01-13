describe('Working with Tables', () => 
{
    beforeEach('Login ', ()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()

        cy.get('.btn-close').click()// closing the alert

        cy.get("#menu-customer>a").click() //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click() // customers sub-menu 

    })  
    
    it('Check Number of row and Columns' , ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
            
      })  
      
    it('Check cell data from specific Row and Column' , ()=>{
      
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(7)>td:nth-child(3)")
        .contains('abcdrt@gmail.com')
    })

    it('Read all cell data of Row and Column in the first page' , ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows) =>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col, index, $cols) =>{
                        cy.log($col.text())
                    })
                })
        })
    })     
  }) 

