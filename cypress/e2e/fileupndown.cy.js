/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>

it('file upload demo', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('../e2e/assertions-demo.cy.js.mp4')
})

it('Download File', ()=> {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'myDownloads', 'Example.js')
})
