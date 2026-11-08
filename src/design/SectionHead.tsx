export function SectionHead({
  index,
  label,
  title,
  copy,
}: {
  index: string
  label: string
  title: React.ReactNode
  copy?: string
}) {
  return (
    <div className="section-head reveal">
      <div className="section-kicker">
        <span>{index}</span> / {label}
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}
