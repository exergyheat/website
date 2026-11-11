export function GridLines({ className = '' }: { className?: string }) {
  return (
    <div className={`grid-lines ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  )
}
