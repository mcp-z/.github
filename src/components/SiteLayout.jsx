import { navItems } from "@/lib/content";

export default function SiteLayout({ title = "MCP-Z", children }) {
  return (
    <div className="min-h-dvh">
      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <img src="/assets/mcp-z-logo-120.png" alt="MCP-Z logo" className="h-9 w-9" />
            <span>MCP-Z</span>
          </a>
          <nav className="site-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container py-10 pb-24">
        <section className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <div className="content">
            {children}
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 fixed bottom-0 inset-x-0 z-10">
        <div className="container py-4 text-sm text-muted-foreground flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} MCP-Z</span>
          <span className="flex gap-3">
            <a className="hover:underline" href="/privacy/">Privacy</a>
            <a className="hover:underline" href="/terms/">Terms</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
