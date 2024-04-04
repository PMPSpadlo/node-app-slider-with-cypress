describe('Swiper Gallery Test', function () {
    it('Checks if second slide contains "United Kingdom"', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    });
});

describe('Swiper Gallery Test', function () {
    it('Checks if third slide contains "Paris"', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
        cy.get('.swiper-button-next').click({force: true});
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Paris');
    });
});
describe('Check all gallery functionality', function () {
    it('Checks if main gallery container is visible', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-wrapper')
            .should('be.visible');
        cy.get('.swiper-slide')
            .should('be.visible')
            .and('have.length', 3);
        cy.get('.swiper-button-prev')
            .should('be.visible')
            .click();
        cy.get('.swiper-button-next')
            .should('be.visible')
            .click();
    });
});