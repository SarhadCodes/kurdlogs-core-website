export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
