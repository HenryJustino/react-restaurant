type CheckboxListProps = {
  label: string;
  className?: string;
  children: React.ReactNode;
};

export default function CheckboxList({
  children,
  className = "",
  label,
}: CheckboxListProps) {
  return (
    <fieldset className={className}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
}
