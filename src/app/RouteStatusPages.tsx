export function RouteErrorPage() {
  return (
    <main className="shell route-content">
      <h1>The portfolio could not load</h1>
      <p>Reload the page or return to the home page.</p>
      <a href="/">Open the portfolio home page</a>
    </main>
  )
}

export function LoadingPage() {
  return (
    <p className="shell" role="status">
      Loading portfolio…
    </p>
  )
}
