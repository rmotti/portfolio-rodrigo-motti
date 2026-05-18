export default function Footer({ copy }) {
  return (
    <footer className="relative py-10 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p className="font-medium">{copy.builtWith}</p>
        <p className="font-mono">{copy.stack}</p>
        <p>{copy.copyright}</p>
      </div>
    </footer>
  )
}
