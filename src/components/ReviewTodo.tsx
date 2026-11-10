import { ReactNode } from 'react'

/** Visible review marker. Never hide these — Tyler is reviewing the draft. */
const ReviewTodo = ({ children }: { children: ReactNode }) => {
  return (
    <aside
      className="my-6 rounded-lg border-2 border-amber-500 bg-amber-50 px-4 py-3 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100"
      role="note"
    >
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
        TODO for Tyler — review before publish
      </p>
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  )
}

export default ReviewTodo
