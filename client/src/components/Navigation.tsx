import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Navigation Component - Academic Heritage Design
 * Sticky header with deep navy background and gold accents
 * Features: Logo, main nav links, mobile hamburger menu, CTA button
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Secondary', href: '/secondary' },
    { label: 'Academics', href: '/academics' },
    { label: 'Activities', href: '/activities' },
    { label: 'Campus', href: '/campus' },
    { label: 'Teachers', href: '/teachers' },
    { label: 'Class Pictures', href: '/class-pictures' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
    { label: 'Virtual Tour', href: '/virtual-tour' },
    { label: 'Day in Life', href: '/day-in-life' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">EA</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold font-serif">DEBOS Bilingual</h1>
                <p className="text-xs text-primary-foreground/70">Secondary School</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="px-3 py-2 text-sm font-medium hover:text-accent transition-colors cursor-pointer relative group">
                  {link.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/admissions">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Book a Visit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded-lg transition-colors cursor-pointer"
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link href="/admissions">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    Book a Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
