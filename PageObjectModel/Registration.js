import { faker } from "@faker-js/faker";

class Registration {

    userInfo() {
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.address = faker.location.street();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.phone = faker.phone.number();
        this.ssn = faker.helpers.replaceSymbols('###-##-####');
        this.username = this.firstName;
        this.password = faker.internet.password();
        this.confirmPassword = this.password;
    }

    registrationWithValidDetails() {
        this.userInfo();
        cy.get("input[id='customer.firstName']").type(this.firstName);
        cy.get("input[id='customer.lastName']").type(this.lastName);
        cy.get("input[id='customer.address.street']").type(this.address);
        cy.get("input[id='customer.address.city']").type(this.city);
        cy.get("input[id='customer.address.state']").type(this.state);
        cy.get("input[id='customer.address.zipCode']").type(this.zipCode);
        cy.get("input[id='customer.phoneNumber']").type(this.phone);
        cy.get("input[id='customer.ssn']").type(this.ssn);
        cy.get("input[id='customer.username']").type(this.username);
        cy.get("input[id='customer.password']").type(this.password);
        cy.get("#repeatedPassword").type(this.confirmPassword);

    }

    passwordMismatchDuringRegistration() {
        this.userInfo();
        cy.get("input[id='customer.firstName']").type(this.firstName);
        cy.get("input[id='customer.lastName']").type(this.lastName);
        cy.get("input[id='customer.address.street']").type(this.address);
        cy.get("input[id='customer.address.city']").type(this.city);
        cy.get("input[id='customer.address.state']").type(this.state);
        cy.get("input[id='customer.address.zipCode']").type(this.zipCode);
        cy.get("input[id='customer.phoneNumber']").type(this.phone);
        cy.get("input[id='customer.ssn']").type(this.ssn);
        cy.get("input[id='customer.username']").type(this.username);
        cy.get("input[id='customer.password']").type(this.password);
        cy.get("#repeatedPassword").type("1234");
    }

}

export default Registration;