type InputProps = {
  id: string;
  label: string;
};

export default function Input(prop: InputProps) {
  return (
    <>
      <label className="block" htmlFor={prop.id}>
        {prop.label}
      </label>
      <input id={prop.id} className="border border-gray-600 p-2" type="text" />
    </>
  );
}
