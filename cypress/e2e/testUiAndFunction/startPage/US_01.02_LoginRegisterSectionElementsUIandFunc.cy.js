/// <reference types="Cypress" />

import { StartPage, LoginPopup, RegisterPopup } from "../../../pageObjects/StartPage";

const startPage = new StartPage();
const loginPopup = new LoginPopup();
const registerPopup = new RegisterPopup();


describe('US_01.02 | Login-register section elements UI and functionality | Login only', () => {

    before(() => {
        cy.visit('/');
    });
    
    beforeEach(function () {
        cy.fixture('startPage').then(startPage => {
            this.startPage= startPage;
        }); 
	});

    it('AT.01.02.03 | Login button has text “Login“', function () {
        startPage
            .getLoginButton()
            .should('have.text', this.startPage.buttons.loginBtnText)
    })

    it('AT_01.02.04 | Logo exists and visible', function () {
        startPage
            .getLogo()
            .should('be.visible')
            .and('have.attr', 'src')
            .and('include', this.startPage.img.logoFileName)
    });  

    it('AT_01.02.06 | Login button: text color green #008000', function () {
        startPage
            .getLoginButton()
            .should('have.css', 'color', this.startPage.buttons.loginBtnTextColor)
    });

    it('AT_01.02.02 | Login button: visible / clickable / opening Login popup', function () {
        startPage.getLoginButton().should('be.visible');
        startPage.clickLoginButton();
        loginPopup
            .getLoginPopupHeader()
            .should('include.text', this.startPage.headers.header_Login_Popup.text)
    });
});
/*
    Login and registration tests are separated to avoid going to the "/" before each test.
*/
describe('US_01.02 | Login-register section elements UI and functionality | Registration only', () => {

    before(() => {
        cy.visit('/');
    });
    
    beforeEach(function () {
        cy.fixture('startPage').then(startPage => {
            this.startPage= startPage;
        }); 
	});

    it('AT_01.02.01 | Verify Link "Register account now": visible and have text "Register account now"', function () {
        startPage
            .getRegisterAccountLink()
            .should('be.visible')
            .and('have.text', this.startPage.links.registerAccountNowEnglishText);
    });

    it('AT_01.02.05 | Verify Link "Register account now" is visible, clickable and opens registration pop up', function() {
        startPage.clickRegisterAccountLink()
        registerPopup.getRegisterAgentAccountHeader().should('have.text', this.startPage.headers.registerAgentAccount);
    });

});