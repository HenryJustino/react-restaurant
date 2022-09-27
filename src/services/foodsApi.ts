import { Food, NewFood } from "../food";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch("http://localhost:3001/foods");
  return resp.json();
}

export async function addFood(food: NewFood): Promise<Food> {
  const resp = await fetch("http://localhost:3001/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  return resp.json();
}
