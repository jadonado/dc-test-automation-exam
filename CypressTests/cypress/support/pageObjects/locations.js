export class OurLocations {
    /**
     * Selectors for Our Locations Section
     */
    selectors = {
        ourLocationsHeaderTitle: 'h2.cmp-title__text',
        ourLocationsBodyText: 'div.aem-Grid:contains("Our locations") div.body-text p',
        locationTabsContainer: "div.cmp-location__nav datacom-fixed-width",
        newZealandTab: '[data-tab-section-id=".item0"]',
        australiaTab: '[data-tab-section-id=".item1"]',
        asiaTab: '[data-tab-section-id=".item2"]',
        sectionName: "div.cmp-location__location__name",
        sectionAddress: "p.cmp-location__location__address",
        sectionDirection: "p.cmp-location__location__direction a",
        sectionPhone: "p.cmp-location__location__phone",
        sectionEmail: "p.cmp-location__location__email a",
        get section() {
            return (locationName) =>
                `div.cmp-location__location-container:contains(${locationName})`;
        }
    };

    /**
     * Gets the Name selector for a given Location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationNameFor(sectionName) {
        return cy.get(`${this.selectors.section(sectionName)} ${this.selectors.sectionName}`);
    }

    /**
     * Gets the Address selector for a given Location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationAddressFor(sectionName) {
        return cy.get(`${this.selectors.section(sectionName)} ${this.selectors.sectionAddress}`);
    }

    /**
     * Gets the Direction selector for a given Location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationDirectionFor(sectionName) {
        return cy.get(`${this.selectors.section(sectionName)} ${this.selectors.sectionDirection}`);
    }

    /**
     * Gets the Phone selector for a given Location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationPhoneFor(sectionName) {
        return cy.get(`${this.selectors.section(sectionName)} ${this.selectors.sectionPhone}`);
    }

    /**
     * Gets the Email selector for a given Location
     * @param {*} sectionName 
     * @returns 
    */
    getLocationEmailFor(sectionName) {
        return cy.get(`${this.selectors.section(sectionName)} ${this.selectors.sectionEmail}`);
    }

    /**
     * Verifies that Location name is visible
     * and returns the text value of the
     * Location Name for a given location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationNameTextFor(sectionName) {
        return this.getLocationNameFor(sectionName)
            .should("be.visible")
            .invoke("text")
            .then((txt) => {
                return txt.trim();
            });
    }

    /**
     * Verifies that Address is visible
     * and returns the text value of the
     * Address for a given location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationAddressTextFor(sectionName) {
        return this.getLocationAddressFor(sectionName)
            .should("be.visible")
            .invoke("text")
            .then((txt) => {
                return txt.trim();
            });
    }

    /**
     * Gets Link Text for Location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationDirectionLinkTextFor(sectionName) {
        return this.getLocationDirectionFor(sectionName)
            .should("be.visible")
            .invoke("attr", "href")
            .then((link) => {
                return String(link).trim();
            });
    }

    /**
     * Verifies that Phone Number is visible
     * and returns the text value of the
     * Phone Number for a given location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationPhoneTextFor(sectionName) {
        return this.getLocationPhoneFor(sectionName)
            .should("be.visible")
            .invoke("text")
            .then((txt) => {
                return txt.trim();
            });
    }

    /**
     * Verifies that Email Address is visible
     * and returns the text value of the
     * Email Address for a given location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationEmailTextFor(sectionName) {
        return this.getLocationEmailFor(sectionName)
            .should("be.visible")
            .invoke("text")
            .then((txt) => {
                return txt.trim();
            });
    }

    /**
     * Gets the email link text for location
     * @param {*} sectionName 
     * @returns 
     */
    getLocationEmailLinkTextFor(sectionName) {
        return this.getLocationEmailFor(sectionName)
            .should("be.visible")
            .invoke("attr", "href")
            .then((link) => {
                return String(link).trim();
            });
    }

    /**
     * Clicks the Location Name
     * @param {*} name 
     */
    clickLocationSection(name) {
        cy.get(this.selectors.section(name)).click();
    }

    /**
     * Gets all the details for a Location
     * and returns the details in json format
     * @param {*} name 
     * @returns 
     */
    getLocationDetailsFor(name) {
        let sectionName;
        let sectionAddress;
        let sectionPhone;
        let sectionEmail;
        let sectionDirectionLink;
        let sectionEmailLink;

        this.getLocationNameTextFor(name).then((name) => {
            sectionName = name;
        });

        this.getLocationAddressTextFor(name).then((address) => {
            sectionAddress = address;
        });

        this.getLocationPhoneTextFor(name).then((phone) => {
            sectionPhone = phone;
        });

        this.getLocationEmailTextFor(name).then((email) => {
            sectionEmail = email;
        });

        this.getLocationDirectionLinkTextFor(name).then((link) => {
            sectionDirectionLink = link;
        });

        this.getLocationEmailLinkTextFor(name).then((link) => {
            sectionEmailLink = link;
        });


        return cy.wrap(null).then(() => {
            return cy.wrap(`{
                "name": "${sectionName}",
                "address": "${sectionAddress}",
                "phone": "${sectionPhone}",
                "email": "${sectionEmail}",
                "directionLink": "${sectionDirectionLink}",
                "emailLink": "${sectionEmailLink}"
            }`);
        });
    }
}
