/// <reference types="Cypress" />

import LeftMenuPanel from "../../../pageObjects/LeftMenuPanel";

const leftMenuPanel = new LeftMenuPanel();

describe('US_03.02 Booking link', () => {

    const AGENT = Cypress.env('agent');

    beforeEach(function () {
        cy.fixture('leftMenuPanel').then(leftMenuPanel => {
            this.leftMenuPanel = leftMenuPanel;
        })
        cy.visit('/');
        cy.login(AGENT.email, AGENT.password);
    });

    it('AT_03.02.01 |Verify that "Booking" icon in the left menu panel is visible', () => {
        leftMenuPanel.getBookingIcon().should('be.visible');
    });

    it('AT_03.02.02 | Verify that Sidebar has text "Booking"', function () {
        leftMenuPanel.getBookingMenuLink().should('include.text', this.leftMenuPanel.menuLinks.bookingLink)
    });

    it('AT_03.02.03 | Clicking "Booking" opening the page with heading "Create booking"', function() {
        leftMenuPanel.getBookingMenuLink()
    });
});
