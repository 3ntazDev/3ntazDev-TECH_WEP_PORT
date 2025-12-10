import { Mail, MessageSquare, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section className="container mx-auto px-6 py-20 max-w-[1400px]">
      <div className="bg-gradient-to-br from-primary/10 via-card to-card border border-border/50 rounded-3xl p-12 md:p-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">LET'S WORK</span>
            <br />
            <span className="text-muted-foreground">TOGETHER</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Have a project in mind or need quality assurance expertise? Let's connect and build something amazing
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fahad@example.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://github.com/3ntazDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border/50 text-foreground rounded-xl font-bold hover:border-primary/50 hover:bg-card/80 transition-all"
            >
              <Send className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
