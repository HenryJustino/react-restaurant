type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading(props: HeadingProps) {
  const Tag = `h${props.level}` as keyof JSX.IntrinsicElements;
  return <Tag className="text-xl font-bold">{props.children}</Tag>;
}
