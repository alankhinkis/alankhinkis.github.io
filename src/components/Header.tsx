import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 group"
              aria-label="Scroll to top"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                AK
              </div>
              <span className="font-semibold text-lg hidden sm:block">Alan Khinkis</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="ml-4 bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90"
              asChild
            >
              <a href="mailto:aek234@cornell.edu">Contact</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card mt-2 rounded-lg p-4 space-y-2 animate-fade-in">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              className="w-full bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90"
              asChild
            >
              <a href="mailto:aek234@cornell.edu">Contact</a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
