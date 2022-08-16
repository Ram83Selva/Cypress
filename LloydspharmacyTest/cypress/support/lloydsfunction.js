
var data;
Cypress.Commands.add('loadWebElements', () => {
    cy.fixture('example').then((fdata) =>{
        data=fdata;
        
    })
    return data;
})

Cypress.Commands.add('visitbaseUrl', () => {
    cy.visit('https://onlinedoctor.lloydspharmacy.com/')
})

Cypress.Commands.add('navigateToMedicinesAndVaccines', () => {
    cy.get(data.adviceHeaderMenu).click();
    cy.get('.har-header__sub-nav-link[href="/uk/travel-advice"]').click();
    cy.get('a[href="#122414"]').click();
})

Cypress.Commands.add('selectHowToPreventMosquitoBites', () => {
    cy.get('h4[class="har-accordion__header"]').click();
    cy.get('a[href*="how-to-prevent-mosquito-bites"]').click();
})
Cypress.Commands.add('VerifyTitle_HowToPreventMosquitoBites', () => {
    cy.get('h1[class*="text-center"]').should('have.text' , 'ABCD How to prevent mosquito bites')
})   

Cypress.Commands.add('Select_Morning_Afterpill', () => {
    cy.get('.har-header__main-nav-item:first-of-type').click();
    cy.get('.har-header__sub-nav-link[href="/uk/morning-after-pill"]').click();
})  

Cypress.Commands.add('Verify_ellaone_Treatment_Cost', () => {
    cy.get("li[data-search='ellaOne - morning after pill'] div[class*='text-right']").should('have.text',data.ellaOne);
}) 

Cypress.Commands.add('Hairloss_Upto_Confirm_Agreements', () => {
    cy.get('.har-header__main-nav-item:first-of-type').click();
    cy.xpath("//h4[contains(text(),'Men')]/..//li/a[text()='Hair loss']").click();
    cy.xpath("(//a[contains(text(), 'Help me')])[1]").click();
    cy.get('a[id=mohc-register-button]').click();
    cy.xpath("//div[contains(text(), 'I confirm the above')]").click();
    cy.get("button[id='nav-next']").click();
    cy.xpath("//div[contains(text(), 'I understand')]").click();
    cy.xpath("//span[contains(text(),'Next')]").click();

}) 

Cypress.Commands.add('Confirming_Patient_Age', () => {
    cy.xpath("//div[text()='Male']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();

        cy.xpath("//input[@id='day']").type('01')
        cy.xpath("//input[@id='month']").type('01')
        cy.xpath("//input[@id='year']").type('1994')
        cy.xpath("//div[@id='ageConsentQuestion']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
}) 

Cypress.Commands.add('Consultation', () => {
    cy.get('label[data-background-image-label="Temples only"]').click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        
        cy.xpath("//div[text()='No']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        cy.wait(500)
        cy.xpath("//div[text()='No']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        cy.wait(500)
        cy.xpath("//div[text()='No']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        cy.wait(500)
        cy.xpath("//div[text()='No']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        cy.wait(500)
        cy.xpath("//div[text()='None of the above']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();

        cy.xpath("//div[text()='No']").click();
        cy.xpath("//span[contains(text(),'Next')]").click();

        cy.xpath("(//input[@type='text'])[1]").type('165');
        cy.xpath("(//input[@type='text'])[2]").type('74');
        cy.xpath("//span[contains(text(),'Next')]").click();

        cy.xpath("//div[contains(text(),'drink or rarely drink')]").click();
        cy.xpath("//span[contains(text(),'Next')]").click();

        cy.xpath("(//div[text()='No'])[1]").click();
        cy.xpath("(//div[text()='No'])[2]").click();
        cy.xpath("(//div[text()='No'])[3]").click();
        cy.xpath("(//div[text()='No'])[4]").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        
        cy.xpath("//span[text()='Proceed']").click();
        
        cy.xpath("//div[contains(text(), 'I confirm the above')]").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
}) 

Cypress.Commands.add('Verifying_Finasteride_Pack_Size', () => {
    cy.xpath("//div[contains(text(), 'Finasteride')]").click();
        cy.xpath("//span[contains(text(),'Next')]").click();
        cy.wait(1000)
        const options = ["4 weeks Finasteride 1mg (£34.00)", "8 weeks Finasteride 1mg (£65.00)", "12 weeks Finasteride 1mg (£95.00)", "24 weeks Finasteride 1mg (£163.00)"];

        cy.get('div[class="answer_label_text"]').each((item, index, list) => {
            expect(Cypress.$(item).text()).to.eq(options[index]);

        })
})
