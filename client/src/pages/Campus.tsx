import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Microscope, BookOpen, Zap, Utensils, Shield, Bus } from 'lucide-react';

/**
 * Campus & Facilities Page - Academic Heritage Design
 * Features: Science labs, library, sports, dining, security, transportation
 */

export default function Campus() {
  const facilities = [
    {
      icon: Microscope,
      name: 'Science Laboratories',
      description: 'State-of-the-art physics, chemistry, and biology labs equipped with modern instruments for hands-on learning and research.',
      features: ['Advanced equipment', 'Safety protocols', 'Research facilities', 'Demonstration areas'],
    },
    {
      icon: BookOpen,
      name: 'Central Library',
      description: 'Comprehensive library with 50,000+ books, digital resources, and quiet study areas for research and learning.',
      features: ['Physical books', 'E-resources', 'Study zones', 'Computer access'],
    },
    {
      icon: Zap,
      name: 'ICT Lab',
      description: 'Modern computer laboratory with high-speed internet, programming software, and multimedia production tools.',
      features: ['Latest computers', 'High-speed internet', 'Software suite', 'Coding platforms'],
    },
    {
      icon: Utensils,
      name: 'Dining Facilities',
      description: 'Spacious cafeteria serving nutritious meals prepared by professional chefs with dietary considerations.',
      features: ['Nutritious meals', 'Dietary options', 'Hygiene standards', 'Comfortable seating'],
    },
    {
      icon: Shield,
      name: 'Security & Safety',
      description: 'Comprehensive security measures including CCTV surveillance, trained security personnel, and emergency protocols.',
      features: ['24/7 surveillance', 'Access control', 'Emergency response', 'First aid centers'],
    },
    {
      icon: Bus,
      name: 'Transportation',
      description: 'Fleet of modern, air-conditioned buses with trained drivers ensuring safe and comfortable commute for students.',
      features: ['Modern buses', 'Trained drivers', 'GPS tracking', 'Multiple routes'],
    },
  ];

  const sportsVenues = [
    { name: 'Football Field', size: '100m x 70m', features: 'Grass pitch with floodlights' },
    { name: 'Basketball Court', size: 'Olympic standard', features: 'Indoor facility with seating' },
    { name: 'Tennis Courts', size: '4 courts', features: 'Professional surfaces' },
    { name: 'Swimming Pool', size: '50m Olympic', features: 'Heated, competition-ready' },
    { name: 'Gymnasium', size: '2000 sq m', features: 'Equipped with modern equipment' },
    { name: 'Athletics Track', size: '400m', features: 'Professional grade surface' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/campus-facilities-ZpsMkZA6aYPx5tSnNtvhoE.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-primary/70" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Campus & Facilities</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">World-Class Infrastructure for Excellence</p>
            </motion.div>
          </div>
        </section>

        {/* Campus Overview */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Our Campus</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-secondary mb-4 leading-relaxed">
                  Elite Academy's sprawling 25-acre campus is designed to provide an inspiring learning environment. Our facilities combine modern architecture with natural surroundings, creating a space where students can thrive academically and personally.
                </p>
                <p className="text-secondary mb-6 leading-relaxed">
                  Every facility has been thoughtfully planned and equipped with the latest technology and resources. From classrooms to laboratories, from sports fields to recreational areas, our campus supports comprehensive student development.
                </p>
                <div className="space-y-3">
                  {['25 acres of green campus', '40+ classrooms', '6 science laboratories', 'Olympic-standard facilities'].map((item, idx) => (
                    <div key={idx} className="flex gap-3 text-secondary">
                      <span className="text-accent font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-lg overflow-hidden shadow-xl"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Facilities */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Key Facilities</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-lg font-bold mb-2 font-serif">{facility.name}</h3>
                    <p className="text-sm text-primary-foreground/90 mb-4">{facility.description}</p>
                    <ul className="space-y-1">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="text-xs flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sports Venues */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Sports Venues</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsVenues.map((venue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏟️</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{venue.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-2">{venue.size}</p>
                  <p className="text-secondary text-sm">{venue.features}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Classroom Features */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Modern Classrooms</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6 font-serif">Technology-Enabled Learning</h3>
                <ul className="space-y-3">
                  {[
                    'Interactive smart boards in every classroom',
                    'High-speed Wi-Fi connectivity',
                    'Audio-visual presentation systems',
                    'Student response systems for engagement',
                    'Digital library access from classrooms',
                    'Climate-controlled environments',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-accent">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6 font-serif">Comfortable Learning Spaces</h3>
                <ul className="space-y-3">
                  {[
                    'Ergonomic furniture for student comfort',
                    'Natural lighting and ventilation',
                    'Collaborative learning areas',
                    'Flexible classroom layouts',
                    'Accessible for students with disabilities',
                    'Inspiring wall displays and resources',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-accent">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Virtual Campus Tour CTA */}
        <section className="py-20 bg-background">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif text-primary">Experience Our Campus</h2>
              <p className="text-secondary mb-8 max-w-2xl mx-auto">
                Take a virtual tour of our state-of-the-art facilities and see firsthand why Elite Academy is the premier choice for education.
              </p>
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Take Virtual Tour
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
