import { foodTags } from "./food";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import Heading from "./shared/Heading";
import Input from "./shared/Input";

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form>
        <Input id="name" label="Name" className="my-4" />
        <Input id="description" label="Description" className="my-4" />
        <Input id="price" label="Price" type="number" className="my-4" />
        <Input id="image" label="Image filename" className="my-4" />
        <CheckboxList label="Tags">
          {foodTags.map((tag) => (
            <Checkbox key={tag} id={tag} label={tag} />
          ))}
        </CheckboxList>
        <Button className="block mt-4" variant="primary" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}
