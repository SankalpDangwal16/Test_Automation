describe('Swag Labs Login Test', () => {
<<<<<<< HEAD
    
    it('Should login successfully with valid credentials', () => {
        // Clear cookies and local storage to avoid any stale data
        cy.clearCookies();
        cy.clearLocalStorage();

        // Visit the Swag Labs login page
        cy.visit('https://www.saucedemo.com/');
        
        // Take a screenshot of the login page
        cy.screenshot('Login_Page');

        // Enter the username
        cy.get('input[name="user-name"]').type('standard_user');
        
        // Enter the password
        cy.get('input[name="password"]').type('secret_sauce');
        
        // Click the Login button
        cy.get('input[type="submit"]').click();
        
        // Validate that login was successful by checking for a specific element on the homepage
        cy.url().should('include', '/inventory.html');

        // Take a screenshot of the homepage after successful login
        cy.screenshot('Home_Page_After_Login');
    });

    it('Should fail to login with invalid credentials', () => {
        // Clear cookies and local storage to avoid any stale data
        cy.clearCookies();
        cy.clearLocalStorage();

        // Visit the Swag Labs login page
        cy.visit('https://www.saucedemo.com/');

        // Take a screenshot of the login page
        cy.screenshot('Login_Page_Invalid_Credentials');
        
        // Enter an invalid username
        cy.get('input[name="user-name"]').type('invalid_user');
        
        // Enter an invalid password
        cy.get('input[name="password"]').type('invalid_password');
        
        // Click the Login button
        cy.get('input[type="submit"]').click();
        
        // Validate that an error message is displayed
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Username and password do not match any user in this service');

        // Take a screenshot of the error message
        cy.screenshot('Error_Message_Invalid_Login');
    });
    
=======

  it('Should login successfully with valid credentials', () => {
      // Clear cookies and local storage to avoid any stale data
      cy.clearCookies();
      cy.clearLocalStorage();

      // Visit the Swag Labs login page
      cy.visit('https://www.saucedemo.com/');
      
      // Take a screenshot of the login page
      cy.screenshot('Login_Page');

      // Use 'input#user-name' for the username input field
      cy.get('input#user-name').should('be.visible').type('standard_user');
      
      // Use 'input#password' for the password input field
      cy.get('input#password').should('be.visible').type('secret_sauce');
      
      // Use 'input#login-button' for the login button
      cy.get('input#login-button').click();
      
      // Validate that login was successful by checking the URL
      cy.url().should('include', '/inventory.html');

      // Validate that the inventory list is visible
      cy.get('.inventory_list').should('be.visible');

      // Take a screenshot of the homepage after successful login
      cy.screenshot('Home_Page_After_Login');
  });

>>>>>>> 395332f (Updated Cypress config for report generation and other changes)
});
