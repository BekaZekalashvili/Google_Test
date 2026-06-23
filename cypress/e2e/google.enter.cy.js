describe('Google ტესტი', () => {
    it('should display the correct title', () => {
        //1. გადადი Google-com-ზე
        cy.visit('https://www.google.com');
        //2. შემოწმება URL სწორია
        cy.url().should('include', 'google.com');
        //3. შემოწმება title სწორია     
        cy.title().should('include', 'Google');
        //4. შემოწმება search input box არსებობს
        cy.get('textarea[name="q"]').should('be.visible');

    })
})
