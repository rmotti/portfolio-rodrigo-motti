export default function Footer({ name }) {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">© 2025 {name} - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
