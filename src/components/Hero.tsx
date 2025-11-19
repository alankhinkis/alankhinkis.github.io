import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Alan Khinkis — Computer Science & ORIE at Cornell.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headshot Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-4xl font-bold text-white shadow-2xl transition-transform group-hover:scale-105">
                AK
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
            </div>
          </div>

          {/* Typewriter Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="inline-block min-h-[1.2em]">
                <span className={!isTypingComplete ? 'typewriter inline-block' : ''}>
                  {displayText}
                </span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Aspiring quantitative analyst/data scientist working at the intersection of{' '}
              <span className="gradient-text font-semibold">finance</span>,{' '}
              <span className="gradient-text font-semibold">coding</span>, and{' '}
              <span className="gradient-text font-semibold">statistics</span>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a 
                href="https://github.com/alankhinkis" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/alankhinkis/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a 
                href="mailto:aek234@cornell.edu"
                aria-label="Email Alan"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-lg px-8"
              asChild
            >
              <a href="/Alan-Khinkis-Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10 text-lg px-8"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gradient-to-b from-gradient-start to-gradient-end rounded-full" />
        </div>
      </div>
    </section>
  );
};
