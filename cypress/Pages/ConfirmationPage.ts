class ConfirmationPage {

    checkTheOrder(){}

    verifyIsAt(){
        cy.url().should('contain', '/order-received/')
    }

}

export default ConfirmationPage;