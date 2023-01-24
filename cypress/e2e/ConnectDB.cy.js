/// <reference types="cypress"/>
describe("Db Connection" ,() => { 
    
    it('Connect to DB',()=>{

        cy.task("queryDb","CREATE TABLE movies(movie_name VARCHAR(200), movie_year INTEGER, country VARCHAR(100), genre VARCHAR(20), PRIMARY KEY(movie_name, movie_year));");        
    })
})