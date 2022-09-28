describe("Admin", () => {
  it("should submit a new Food and display it on the menu page", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.findByRole("link", { name: "Admin" }).click();
    cy.findByLabelText("Name").type("BBQ Ribs");
    cy.findByLabelText("Description").type("Tangy and sweet");
    cy.findByLabelText("Price").clear().type("19.99");
    cy.findByLabelText("Image filename").type("fake-photo.jpg");
    cy.findByLabelText("Breakfast").check();
  });
});
