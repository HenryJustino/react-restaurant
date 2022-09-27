import { useState } from "react";
import toast from "react-hot-toast";
import { foodTags, NewFood } from "./food";
import { addFood } from "./services/foodsApi";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import Heading from "./shared/Heading";
import Input from "./shared/Input";

const emptyFood: NewFood = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

export default function Admin() {
  const [food, setFood] = useState(emptyFood);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    // React injects the current state value when a function is passed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await addFood(food);
    toast.success("Food added! 🍔");
    setFood(emptyFood);
  }

  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          className="my-4"
          onChange={handleInputChange}
          value={food.name}
        />
        <Input
          id="description"
          label="Description"
          className="my-4"
          onChange={handleInputChange}
          value={food.description}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          className="my-4"
          onChange={handleInputChange}
          value={food.price.toString()}
        />
        <Input
          id="image"
          label="Image filename"
          className="my-4"
          onChange={handleInputChange}
          value={food.image}
        />
        <CheckboxList label="Tags">
          {foodTags.map((tag) => (
            <Checkbox
              key={tag}
              id={tag}
              label={tag}
              checked={food.tags.includes(tag)}
              onChange={(event) => {
                setFood((currentFood) => {
                  const { checked } = event.target;
                  const tags = checked
                    ? [...currentFood.tags, tag]
                    : currentFood.tags.filter((t) => t !== tag);
                  return { ...currentFood, tags };
                });
              }}
            />
          ))}
        </CheckboxList>
        <Button className="block mt-4" variant="primary" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}
