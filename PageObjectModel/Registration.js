import { faker } from "@faker-js/faker";

class Registration{
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    address = faker.location.street();
    city = faker.location.city();
    state = faker.location.state();
    zipCode = faker.location.zipCode();
    phone = faker.phone.number();
    ssn = faker.helpers.replaceSymbols('###-##-####');
    username = this.firstName;
    password = faker.internet.password();
    confirmPassword = this.password;

    registrationWithValidDetails(){
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

}

export default Registration;