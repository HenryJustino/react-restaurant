import { deleteFood, searchFoods } from "../../src/services/foodsApi";

describe("Admin", () => {
  it("should submit a new Food and display it on the menu page", async () => {
    // Delete any pre-existing records from a previous test run.
    await searchFoods("BBQ Ribs").then((foods) => {
      foods.forEach(async (food) => {
        await deleteFood(food.id);
      });
    });

    cy.visit("http://127.0.0.1:5173/");
    cy.findByRole("link", { name: "Admin" }).click();
    cy.findByLabelText("Name").type("BBQ Ribs");
    cy.findByLabelText("Description").type("Tangy and sweet");
    cy.findByLabelText("Price").clear().type("19.99");
    cy.findByLabelText("Image filename").type("fake-photo.jpg");
    cy.findByLabelText("Breakfast").check();
    cy.findByRole("button", { name: "Save" }).click();
    cy.findByRole("link", { name: "Home" }).click();
    cy.findByRole("heading", { name: "BBQ Ribs" });
  });
});
