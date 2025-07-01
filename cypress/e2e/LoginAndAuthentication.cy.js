/// <reference types="Cypress" />

describe("Login and authentication",()=>{
     beforeEach("",()=>{
        cy.visit("/")
     })

     it("Login with valid username and password",()=>{
        cy.login("Lucas","4oMfD7UQfRUmL22");
        cy.get("p[class='smallText']").should("contain","Welcome Lucas");
     })

     it("Login with invalid username/password",()=>{
        cy.login("Lucas","1234");
        cy.get(".error").should("contain","The username and password could not be verified.");
     })

     it("Attempt login with blank fields",()=>{
        cy.get("input[value='Log In']").click();
        cy.get(".error").should("contain","Please enter a username and password.");
     })

     it("Logout from account",()=>{
        cy.login("Lucas","4oMfD7UQfRUmL22");
        cy.get("p[class='smallText']").should("contain","Welcome Lucas");
        cy.get("a[href='logout.htm']").click();
        cy.get("div[id='leftPanel']>h2").should("contain","Customer Login");
     })

})