export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading page" className="min-h-[60vh] bg-background px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-3 w-28 rounded bg-muted" />
        <div className="mt-5 h-12 max-w-2xl rounded-xl bg-muted sm:h-16" />
        <div className="mt-5 h-4 max-w-xl rounded bg-muted" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((item) => <div key={item} className="rounded-2xl border border-border p-6"><div className="h-36 rounded-xl bg-muted" /><div className="mt-5 h-5 w-3/4 rounded bg-muted" /><div className="mt-3 h-4 w-full rounded bg-muted" /><div className="mt-2 h-4 w-2/3 rounded bg-muted" /></div>)}
        </div>
      </div>
    </main>
  )
}
