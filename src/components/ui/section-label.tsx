export function SectionLabel({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`section-label${inverse ? " section-label-inverse" : ""}`}>{children}</p>;
}
