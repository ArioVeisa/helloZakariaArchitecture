export default function Loading() {
  return (
    <div className="wrap flex min-h-svh items-center justify-center" aria-busy="true" aria-label="Loading">
      <p className="label-xs animate-pulse text-stone">Loading…</p>
    </div>
  );
}
