describe ('Browser Actions', () =>{
    it('should load shopping website', () =>
    {
        cy.visit ('https://www.saucedemo.com/',{timeout : 15000})
    })
    it ('Fill Username in login page', () =>
    {
        cy.get ('#user-name').clear()
        cy.get ('#user-name').type('standard_user')
    })
    it ('Fill Password in login page', () =>
    {
        cy.get ('#password').clear()
        cy.get ('#password').type('secret_sauce')
    })
    it ('Click on login button in login page', () =>
    {
        cy.contains ('Login').click()
    })
    })
   