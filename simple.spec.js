describe ('Browser Actions', () =>{
    it('should load book website', () =>
    {
        cy.visit ('https://books.toscrape.com/')
        cy.url().should ('include', 'index.html')
    })
    it ('check on all products in book website', () =>
    {
        cy.get ('h1').contains('All products')
        cy.get ('.product_pod').its('length').should ('eq',20)
    })
    it ('Click on Classics category in book website', () =>
    {
        cy.get ('a').contains('Classics').click()
        cy.get ('h1').contains('Classics')
    })
    it ('Check number of books in Classics category', () =>
    {
        cy.get ('.product_pod').its('length').should ('eq',19)
    })
    })
   