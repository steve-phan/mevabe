/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the logo", () => {
    cy.get("a").first().should("exist").should("have.text", "MeVaBe");
  });
});
