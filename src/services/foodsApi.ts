import { Food, NewFood } from "../food";

const url = "http://localhost:3001/foods";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch(url);
  return resp.json();
}

export async function addFood(food: NewFood): Promise<Food> {
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  return resp.json();
}
