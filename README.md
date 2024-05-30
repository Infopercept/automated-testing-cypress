
# Cypress

Cypress is a frontend test automation tool for regression testing of web applications.

It is similar to playwright


## Prerequisites

Node and npm should be installed in your machine

## Installation 

Run this command in the terminal of the desired directory

    npm i cypress --save-dev
## Cypress GUI

Cypress has a gui app which can be used to run test and debug errors

To open it run npx cypress open

This will open a window with a list of test files in the browser
## Tests

In cypress, test are written in it block whereas in playwright it was written in test block

It uses the same concept as playwright but with slightly different syntax

The It block takes two parameters, first is a string for the naming of the test

The second parameter is a function, similar to playwright.
    
    it('Google Search',() => {
        cy.visit('https://www.google.com/')
    })
    
This it block will just goto google.com
## Assertions

There are two types of assertions in Cypress

1.Implicit – built-in-assertions

2.Explicit – now built-in-assertions

1. Implicit Assertions:-

Implicit assertions use .should() function

It takes two parameter, first being the method as a string, and the second being the value to compare

2. Explicit Assertions:-

Explicit assertions use .expect() function

It takes the key as a parameter

For validation it uses dot notation to further use other functions
## Video and Screenshot

Cypress provides video and screenshot functionality 

    cy.screenshot() 

This function will take a screenshot at that time of execution

I have already configured cypress.config.js file to make a video everytime a test is executed
## Page Object Model

Page Object Model refers to using the Objects/Classes to depict and represent all the locators and functions (Components used for the automation) related to that particular page in a web application. 
    
I have included a demo for Page object Model
## How to run tests

 We can execute test files from the cypress gui or throught the command line

    npx cypress run 

This will execute all the tests in the test folder

We can specify the file to be executed by appending –s followed by the file path in command line  