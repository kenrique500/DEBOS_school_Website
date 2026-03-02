import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

/**
 * Footer Component - Academic Heritage Design
 * Deep navy background with gold accents, organized sections
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">EA</span>
              </div>
              <h3 className="text-lg font-bold font-serif">Elite Academy</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Shaping leaders of tomorrow through excellence in education, innovation, and character development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="hover:text-accent transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <span className="hover:text-accent transition-colors cursor-pointer">Academics</span>
                </Link>
              </li>
              <li>
                <Link href="/activities">
                  <span className="hover:text-accent transition-colors cursor-pointer">Activities</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="hover:text-accent transition-colors cursor-pointer">Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/primary">
                  <span className="hover:text-accent transition-colors cursor-pointer">Primary Section</span>
                </Link>
              </li>
              <li>
                <Link href="/secondary">
                  <span className="hover:text-accent transition-colors cursor-pointer">Secondary Section</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions">
                  <span className="hover:text-accent transition-colors cursor-pointer">Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <span className="hover:text-accent transition-colors cursor-pointer">News & Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>123 Academy Lane, Education City, EC 12345</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>info@eliteacademy.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Elite Academy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
