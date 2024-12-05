import { OurLocations } from "../support/pageObjects/locations";

const ourLocations = new OurLocations();

describe("template spec", () => {
    let asiaTestData;
    let ausTestData;
    let nzTestData;

    before(() => {
        cy.fixture("asia.json").then((data) => {
            asiaTestData = data;
        });

        cy.fixture("australia.json").then((data) => {
            ausTestData = data;
        });

        cy.fixture("newZealand.json").then((data) => {
            nzTestData = data;
        });
    });

    beforeEach(() => {      
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit(Cypress.config().baseUrl);
    });

    it("should verify locations section", () => {
        // Step 1
        cy.get(ourLocations.selectors.ourLocationsHeaderTitle).contains('Our locations');
        cy.get(ourLocations.selectors.ourLocationsBodyText).contains('Contact one of our global offices or one of our teams to find out more about how we can help you, or to answer any query you may have.');
        
        // Step 2
        cy.get(ourLocations.selectors.newZealandTab).contains('New Zealand');
        cy.get(ourLocations.selectors.australiaTab).contains('Australia');
        cy.get(ourLocations.selectors.asiaTab).contains('Asia');

        // Step 3
        // Verify Location Details Under Australia Tab
        cy.get(ourLocations.selectors.australiaTab).click();

        let section = "Adelaide";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.adelaide.name);
            expect(locDetails.address).to.eq(ausTestData.adelaide.address);
            expect(locDetails.phone).to.eq(ausTestData.adelaide.phone);
            expect(locDetails.email).to.eq(ausTestData.adelaide.email);
            expect(locDetails.directionLink).to.eq(ausTestData.adelaide.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.adelaide.emailLink);
        });

        let prevSection = section;
        section = "Brisbane";
        ourLocations.clickLocationSection(section);
        // Verifies that the previous section is collapsed when opening a new section
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.brisbane.name);
            expect(locDetails.address).to.eq(ausTestData.brisbane.address);
            expect(locDetails.phone).to.eq(ausTestData.brisbane.phone);
            expect(locDetails.email).to.eq(ausTestData.brisbane.email);
            expect(locDetails.directionLink).to.eq(ausTestData.brisbane.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.brisbane.emailLink);
        });

        prevSection = section;
        section = "Canberra";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.canberra.name);
            expect(locDetails.address).to.eq(ausTestData.canberra.address);
            expect(locDetails.phone).to.eq(ausTestData.canberra.phone);
            expect(locDetails.email).to.eq(ausTestData.canberra.email);
            expect(locDetails.directionLink).to.eq(ausTestData.canberra.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.canberra.emailLink);
        });

        prevSection = section;
        section = "Melbourne";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.melbourne.name);
            expect(locDetails.address).to.eq(ausTestData.melbourne.address);
            expect(locDetails.phone).to.eq(ausTestData.melbourne.phone);
            expect(locDetails.email).to.eq(ausTestData.melbourne.email);
            expect(locDetails.directionLink).to.eq(ausTestData.melbourne.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.melbourne.emailLink);
        });

        prevSection = section;
        section = "Modbury";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.modbury.name);
            expect(locDetails.address).to.eq(ausTestData.modbury.address);
            expect(locDetails.phone).to.eq(ausTestData.modbury.phone);
            expect(locDetails.email).to.eq(ausTestData.modbury.email);
            expect(locDetails.directionLink).to.eq(ausTestData.modbury.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.modbury.emailLink);
        });

        prevSection = section;
        section = "Perth";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.perth.name);
            expect(locDetails.address).to.eq(ausTestData.perth.address);
            expect(locDetails.phone).to.eq(ausTestData.perth.phone);
            expect(locDetails.email).to.eq(ausTestData.perth.email);
            expect(locDetails.directionLink).to.eq(ausTestData.perth.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.perth.emailLink);
        });

        prevSection = section;
        section = "Sydney";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.sydney.name);
            expect(locDetails.address).to.eq(ausTestData.sydney.address);
            expect(locDetails.phone).to.eq(ausTestData.sydney.phone);
            expect(locDetails.email).to.eq(ausTestData.sydney.email);
            expect(locDetails.directionLink).to.eq(ausTestData.sydney.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.sydney.emailLink);
        });

        prevSection = section;
        section = "Townsville";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(ausTestData.townsville.name);
            expect(locDetails.address).to.eq(ausTestData.townsville.address);
            expect(locDetails.phone).to.eq(ausTestData.townsville.phone);
            expect(locDetails.email).to.eq(ausTestData.townsville.email);
            expect(locDetails.directionLink).to.eq(ausTestData.townsville.directionLink);
            expect(locDetails.emailLink).to.eq(ausTestData.townsville.emailLink);
        });

        // Step 4
        // Verify Location Details Under Asia Tab
        cy.get(ourLocations.selectors.asiaTab).click();
        prevSection = section;
        section = "Malaysia";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(asiaTestData.malaysia.name);
            expect(locDetails.address).to.eq(asiaTestData.malaysia.address);
            expect(locDetails.phone).to.eq(asiaTestData.malaysia.phone);
            expect(locDetails.email).to.eq(asiaTestData.malaysia.email);
            expect(locDetails.directionLink).to.eq(asiaTestData.malaysia.directionLink);
            expect(locDetails.emailLink).to.eq(asiaTestData.malaysia.emailLink);
        });

        prevSection = section;
        section = "Philippines";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(asiaTestData.philippines.name);
            expect(locDetails.address).to.eq(asiaTestData.philippines.address);
            expect(locDetails.phone).to.eq(asiaTestData.philippines.phone);
            expect(locDetails.email).to.eq(asiaTestData.philippines.email);
            expect(locDetails.directionLink).to.eq(asiaTestData.philippines.directionLink);
            expect(locDetails.emailLink).to.eq(asiaTestData.philippines.emailLink);
        });

        prevSection = section;
        section = "Singapore";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(asiaTestData.singapore.name);
            expect(locDetails.address).to.eq(asiaTestData.singapore.address);
            expect(locDetails.phone).to.eq(asiaTestData.singapore.phone);
            expect(locDetails.email).to.eq(asiaTestData.singapore.email);
            expect(locDetails.directionLink).to.eq(asiaTestData.singapore.directionLink);
            expect(locDetails.emailLink).to.eq(asiaTestData.singapore.emailLink);
        });

        // Step 5
        // Verify Location Details Under New Zealand
        cy.get(ourLocations.selectors.newZealandTab).click();

        prevSection = section;
        section = "Auckland";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.auckland.name);
            expect(locDetails.address).to.eq(nzTestData.auckland.address);
            expect(locDetails.phone).to.eq(nzTestData.auckland.phone);
            expect(locDetails.email).to.eq(nzTestData.auckland.email);
            expect(locDetails.directionLink).to.eq(nzTestData.auckland.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.auckland.emailLink);
        });

        prevSection = section;
        section = "Christchurch";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.christchurch.name);
            expect(locDetails.address).to.eq(nzTestData.christchurch.address);
            expect(locDetails.phone).to.eq(nzTestData.christchurch.phone);
            expect(locDetails.email).to.eq(nzTestData.christchurch.email);
            expect(locDetails.directionLink).to.eq(nzTestData.christchurch.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.christchurch.emailLink);
        });

        prevSection = section;
        section = "Dunedin";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.dunedin.name);
            expect(locDetails.address).to.eq(nzTestData.dunedin.address);
            expect(locDetails.phone).to.eq(nzTestData.dunedin.phone);
            expect(locDetails.email).to.eq(nzTestData.dunedin.email);
            expect(locDetails.directionLink).to.eq(nzTestData.dunedin.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.dunedin.emailLink);
        });

        prevSection = section;
        section = "Hamilton";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.hamilton.name);
            expect(locDetails.address).to.eq(nzTestData.hamilton.address);
            expect(locDetails.phone).to.eq(nzTestData.hamilton.phone);
            expect(locDetails.email).to.eq(nzTestData.hamilton.email);
            expect(locDetails.directionLink).to.eq(nzTestData.hamilton.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.hamilton.emailLink);
        });

        prevSection = section;
        section = "Hastings";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.hastings.name);
            expect(locDetails.address).to.eq(nzTestData.hastings.address);
            expect(locDetails.phone).to.eq(nzTestData.hastings.phone);
            expect(locDetails.email).to.eq(nzTestData.hastings.email);
            expect(locDetails.directionLink).to.eq(nzTestData.hastings.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.hastings.emailLink);
        });

        prevSection = section;
        section = "Nelson";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.nelson.name);
            expect(locDetails.address).to.eq(nzTestData.nelson.address);
            expect(locDetails.phone).to.eq(nzTestData.nelson.phone);
            expect(locDetails.email).to.eq(nzTestData.nelson.email);
            expect(locDetails.directionLink).to.eq(nzTestData.nelson.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.nelson.emailLink);
        });

        prevSection = section;
        section = "New Plymouth";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.newPlymouth.name);
            expect(locDetails.address).to.eq(nzTestData.newPlymouth.address);
            expect(locDetails.phone).to.eq(nzTestData.newPlymouth.phone);
            expect(locDetails.email).to.eq(nzTestData.newPlymouth.email);
            expect(locDetails.directionLink).to.eq(nzTestData.newPlymouth.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.newPlymouth.emailLink);
        });

        prevSection = section;
        section = "Rotorua";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.rotorua.name);
            expect(locDetails.address).to.eq(nzTestData.rotorua.address);
            expect(locDetails.phone).to.eq(nzTestData.rotorua.phone);
            expect(locDetails.email).to.eq(nzTestData.rotorua.email);
            expect(locDetails.directionLink).to.eq(nzTestData.rotorua.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.rotorua.emailLink);
        });

        prevSection = section;
        section = "Tauranga";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.tauranga.name);
            expect(locDetails.address).to.eq(nzTestData.tauranga.address);
            expect(locDetails.phone).to.eq(nzTestData.tauranga.phone);
            expect(locDetails.email).to.eq(nzTestData.tauranga.email);
            expect(locDetails.directionLink).to.eq(nzTestData.tauranga.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.tauranga.emailLink);
        });

        prevSection = section;
        section = "Wellington";
        ourLocations.clickLocationSection(section);
        ourLocations.getLocationEmailFor(prevSection).should('not.be.visible');
        ourLocations.getLocationDetailsFor(section).then((details) => {
            let locDetails = JSON.parse(details);
            expect(locDetails.name).to.eq(nzTestData.wellington.name);
            expect(locDetails.address).to.eq(nzTestData.wellington.address);
            expect(locDetails.phone).to.eq(nzTestData.wellington.phone);
            expect(locDetails.email).to.eq(nzTestData.wellington.email);
            expect(locDetails.directionLink).to.eq(nzTestData.wellington.directionLink);
            expect(locDetails.emailLink).to.eq(nzTestData.wellington.emailLink);
        });
    });
});
