/// <reference types="Cypress" />

import LeftMenuPanel from "../../../pageObjects/LeftMenuPanel";
import HelpdeskPage from "../../../pageObjects/HelpdeskPage";

const leftMenuPanel = new LeftMenuPanel();
const helpdeskPage = new HelpdeskPage();

describe('US_03.05 | Contact us link', () => {

    const AGENT = Cypress.env('agent');
    
    beforeEach(function () {
        cy.fixture('leftMenuPanel').then(leftMenuPanel => {
            this.leftMenuPanel = leftMenuPanel;
        });
        cy.fixture('helpdeskPage').then(helpdeskPage => {
            this.helpdeskPage = helpdeskPage;
        });
        cy.visit('/');
        cy.login(AGENT.email, AGENT.password);
    });

    it('AT_03.05.01 | Sidebar has "Contact us" text, () => ', function() {
        leftMenuPanel
            .getContactUsMenuLink()
            .should('have.text', this.leftMenuPanel.menuLinks.contactUsLink) 
    })

    it('AT_03.05.02 |"Contact us" icon is visible', () =>  {  
        leftMenuPanel
            .getContactUsIcon()
            .should('be.visible')
    })

    it('AT_03.05.03 |Clicking "Contact us" opening Helpdesk page with a header "Helpdesk", () => ', function() {  
        leftMenuPanel.clickContactUsIcon()
        
        helpdeskPage
            .getHelpdeskHeader()
            .should('include.text', this.helpdeskPage.headers.mainHeaderPage ) 
    })
})
