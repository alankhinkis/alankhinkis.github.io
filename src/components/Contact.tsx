import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about 
            machine learning and quantitative trading. Feel free to reach out!
          </p>

          <div className="glass-card p-8 space-y-8 animate-fade-in">
            {/* Email */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <Button
                size="lg"
                className="bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="mailto:aek234@cornell.edu?subject=Website%20inquiry%20—%20Alan%20Khinkis">
                  <Mail className="mr-2 h-5 w-5" />
                  aek234@cornell.edu
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect on Social</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://github.com/alankhinkis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/alankhinkis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Resume Download */}
            <div className="space-y-4 pt-4 border-t border-border/50">
              <h3 className="text-xl font-semibold">Download Resume</h3>
              <Button
                variant="outline"
                size="lg"
                className="hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="/Alan_Khinkis_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Alan_Khinkis_Resume.pdf
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                (To site maintainer: Place resume PDF in /public directory)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
