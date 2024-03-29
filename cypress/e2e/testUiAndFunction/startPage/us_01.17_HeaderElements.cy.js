/// <reference types="cypress"/>

import {StartPage} from "../../../pageObjects/StartPage.js"
import {LoginPopup} from "../../../pageObjects/StartPage.js";
import {RestorePopup} from "../../../pageObjects/StartPage.js";

const startPage = new StartPage();
const loginPopup = new LoginPopup();
const restorePopup = new RestorePopup();

describe('US_01.17 | Header elements', () => {
    beforeEach(function () {
        cy.visit('/');
        startPage.clickLoginButton();
        loginPopup.clickForgotYourPasswordLink();
    });

    it('AT_01.17.01 | Verify `X` button is visible, clickable and closing Popup', function () {
        restorePopup.getCloseButton().should('be.visible');
        restorePopup.clickCloseButton();
        restorePopup.getRestorePopup().should('be.not.visible');
        startPage.getModalBackdrop().should('not.exist');
    });
});
