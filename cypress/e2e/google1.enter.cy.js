describe    ('Google ტესტი გაფართოებული', () => {
    //ყოველ ტესტამდე გადადი Google.com-ზე
    beforeEach(() => {
        cy.visit('https://www.google.com');
    });

    it('უნდა გახსნა Google-ის მთავარ გვერდი', () => {
        //1. შემოწმება URL სწორია
        cy.url().should('include', 'google.com');
        //2. შემოწმება title სწორია     
        cy.title().should('include', 'Google');
      
    });

    it('უნდა მოძებნოს Cypress ქართულ Google-ში', () => {
        //1. მოძებნე "Cypress" Google-ში
        cy.get('textarea[name="q"]').type('Cypress{enter}'); 

        //2. შემოწმება შედეგები გამოჩნდა    
        cy.url().should('include', 'search');

        //3. შემოწმება სათაური შეიცავს "Cypress" 
        cy.title().should('include', 'Cypress');

    })
})
