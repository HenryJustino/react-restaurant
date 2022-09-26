type InputProps = {
  className?: string;
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
};

export default function Input({
  id,
  className,
  label,
  type = "text",
}: InputProps) {
  return (
    <div className={className}>
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="border border-gray-600 p-2" type={type} />
    </div>
  );
}
