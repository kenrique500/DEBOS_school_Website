import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component - Professional Modern Design
 * Deep Teal background with gold accents, organized sections
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-accent">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary font-bold text-lg font-serif">D</span>
              </div>
              <h3 className="text-lg font-bold font-serif">DEBOS Bilingual</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Excellence in bilingual education. Shaping global leaders through academic rigor, character development, and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Academics</span>
                </Link>
              </li>
              <li>
                <Link href="/activities">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Activities</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/alumni">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Alumni</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold mb-4 text-accent text-lg">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/secondary">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Secondary Section</span>
                </Link>
              </li>
              <li>
                <Link href="/teachers">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Our Teachers</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">News & Events</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent mt-0.5" />
                <span>Kombe, Kotto Road Benabocko, Mongo Division, Cameroon</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent mt-0.5" />
                <span>+237 (0) 123 456 789</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent mt-0.5" />
                <span>info@debosbilingual.cm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} DEBOS Bilingual Secondary School. All rights reserved.</p>
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
