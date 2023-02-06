/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the h1 heading", () => {
    cy.get("h1")
      .first()
      .should("exist")
      .should("have.text", "Thông tin Luật Pháp và cuộc sống tại Đức");
  });
});
