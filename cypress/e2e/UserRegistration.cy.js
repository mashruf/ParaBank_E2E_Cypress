/// <reference types="Cypress" />

import Registration from "../../PageObjectModel/Registration.js";

const reg = new Registration();

describe("Registration",()=>{

    beforeEach("",()=>{
        cy.visit("/");
        cy.get("a[href='register.htm']").click();
    })

    it("Registration with valid details",()=>{

        cy.url().should("include","/register.htm");
        reg.registrationWithValidDetails();
        cy.get("input[value='Register']").click();
        cy.get(".title").should("contain",reg.username);
        cy.get("div[id='rightPanel']>p").should("contain","Your account was created successfully. You are now logged in.");
    })

})