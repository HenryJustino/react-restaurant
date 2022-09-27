type CheckboxProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
};

export default function Checkbox({
  id,
  className,
  label,
  value,
  checked,
}: CheckboxProps) {
  return (
    <div className={className}>
      <input
        checked={checked}
        value={value}
        id={id}
        className="border border-gray-600 p-2"
        type="checkbox"
      />
      <label className="block" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
