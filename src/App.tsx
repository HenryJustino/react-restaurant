import { foods } from "./food";

// Exercise: Display food name in an H2 tag. Display description, and price in separate paragraph tags.
// Style the h2 tag as desired.
export default function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold">React Restaurant</h1>
      <div className="flex flex-wrap">
        {foods.map((food) => {
          return (
            <div className="hover:bg-indigo-600 hover:text-white p-2 shadow-lg border max-w-sm m-2 rounded">
              <h2 className="text-lg font-bold">{food.name}</h2>
              <img
                className="h-52"
                src={"/images/" + food.image}
                alt={food.name}
              />
              <p>{food.description}</p>
              <p>${food.price}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
