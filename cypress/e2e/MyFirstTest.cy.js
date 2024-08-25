describe('My First Test', () => {

    it('Automatedcy.js', function() {
        cy.visit('https://demoqa.com/accordian');
        
        // Take a full-page screenshot after visiting the page
        cy.screenshot('youtube-homepage', { capture: 'fullPage' });

        // Perform search
        cy.get('#search-input > #search').type('coding {enter}');

        // Take a full-page screenshot after typing in the search box
        cy.screenshot('search-box-typed', { capture: 'fullPage' });

        // Wait for the search results to load and click the first video
        cy.get('ytd-thumbnail.ytd-video-renderer').first().click();

        // Take a full-page screenshot after clicking the first video
        cy.screenshot('first-video-clicked', { capture: 'fullPage' });
    });
});
