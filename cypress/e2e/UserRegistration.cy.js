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

    it.only("Register with missing fields",()=>{
        cy.url().should("include","/register.htm");
        cy.get("input[value='Register']").click();
        cy.get("span[id='customer.firstName.errors']").should("contain","First name is required.");
        cy.get("span[id='customer.lastName.errors']").should("contain","Last name is required.");
        cy.get("span[id='customer.address.street.errors']").should("contain","Address is required.");
        cy.get("span[id='customer.address.city.errors']").should("contain","City is required.");
        cy.get("span[id='customer.address.state.errors']").should("contain","State is required.");
        cy.get("span[id='customer.address.zipCode.errors']").should("contain","Zip Code is required.");
        cy.get("tbody tr:nth-child(8) td:nth-child(3)").should("contain","Social Security Number is required.");
        cy.get("span[id='customer.username.errors']").should("contain","Username is required.");
        cy.get("span[id='customer.password.errors']").should("contain","Password is required.");
        cy.get("span[id='repeatedPassword.errors']").should("contain","Password confirmation is required.");
    })

})