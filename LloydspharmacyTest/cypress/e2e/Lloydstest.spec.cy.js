/// <reference types = "cypress"/>

var data;

describe('LloydsTest', () => {
   
    before(function () {
       /*cy.fixture('example').then((fdata) =>{
            data=fdata;
        }) */
        cy.loadWebElements();
    }); 

    beforeEach(function () {
        cy.visitbaseUrl();
    }); 

    it('verify blog title', function () {
       
        cy.navigateToMedicinesAndVaccines();
        cy.selectHowToPreventMosquitoBites();
        cy.VerifyTitle_HowToPreventMosquitoBites();    
        expect(true).to.be.true
    })  
  

    it('verify price', function () {
        cy.Select_Morning_Afterpill();
        cy.Verify_ellaone_Treatment_Cost();   
        
        expect(true).to.be.true  
        
    })

    xit('verify finasteride pack size', function() {
       
        cy.Hairloss_Upto_Confirm_Agreements();
        cy.Confirming_Patient_Age();
    //consultation      
        cy.Consultation();
        cy.Verifying_Finasteride_Pack_Size();
        
    })

})