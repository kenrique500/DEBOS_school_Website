import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, Info } from 'lucide-react';

/**
 * Virtual Tour Page - Academic Heritage Design
 * Features: Interactive campus tour with location highlights
 */

interface TourLocation {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string[];
  icon: string;
}

export default function VirtualTour() {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [showInfo, setShowInfo] = useState(true);

  const tourLocations: TourLocation[] = [
    {
      id: 1,
      name: 'Main Campus Entrance',
      description: 'Welcome to Elite Academy. Our impressive main entrance welcomes students, parents, and visitors to our prestigious institution.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
      details: ['Grand entrance archway', 'Visitor parking', 'Security checkpoint', 'Welcome center'],
      icon: '🏛️',
    },
    {
      id: 2,
      name: 'Academic Building',
      description: 'Our state-of-the-art academic building houses modern classrooms equipped with interactive smart boards and collaborative learning spaces.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp',
      details: ['40+ classrooms', 'Smart boards', 'Study areas', 'Teacher offices'],
      icon: '📚',
    },
    {
      id: 3,
      name: 'Science Laboratories',
      description: 'Our advanced science labs feature cutting-edge equipment for physics, chemistry, and biology experiments, supporting hands-on learning.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp',
      details: ['Physics lab', 'Chemistry lab', 'Biology lab', 'Research facilities'],
      icon: '🔬',
    },
    {
      id: 4,
      name: 'Sports Complex',
      description: 'Our comprehensive sports facilities include football fields, basketball courts, tennis courts, and an Olympic-standard swimming pool.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/campus-facilities-ZpsMkZA6aYPx5tSnNtvhoE.webp',
      details: ['Football field', 'Basketball court', 'Tennis courts', 'Swimming pool'],
      icon: '⚽',
    },
    {
      id: 5,
      name: 'Central Library',
      description: 'Our modern library houses over 50,000 books, digital resources, and comfortable study areas for research and learning.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp',
      details: ['50,000+ books', 'Digital resources', 'Study zones', 'Computer access'],
      icon: '📖',
    },
    {
      id: 6,
      name: 'Student Cafeteria',
      description: 'Our spacious cafeteria serves nutritious meals prepared by professional chefs, accommodating dietary preferences and requirements.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
      details: ['Professional chefs', 'Nutritious meals', 'Dietary options', 'Comfortable seating'],
      icon: '🍽️',
    },
  ];

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % tourLocations.length);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + tourLocations.length) % tourLocations.length);
  };

  const location = tourLocations[currentLocation];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Virtual Campus Tour</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Explore Our World-Class Facilities</p>
            </motion.div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Tour Display */}
              <div className="lg:col-span-2">
                <motion.div
                  key={currentLocation}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl group"
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{location.icon}</span>
                        <h2 className="text-3xl font-bold text-primary-foreground font-serif">{location.name}</h2>
                      </div>
                      <p className="text-primary-foreground/90 max-w-2xl">{location.description}</p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevLocation}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextLocation}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Location Counter */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentLocation + 1} / {tourLocations.length}
                  </div>
                </motion.div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-4 mt-8 overflow-x-auto pb-2">
                  {tourLocations.map((loc, index) => (
                    <motion.button
                      key={loc.id}
                      onClick={() => setCurrentLocation(index)}
                      whileHover={{ scale: 1.05 }}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                        index === currentLocation
                          ? 'ring-4 ring-accent shadow-lg'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Info Panel */}
              <div className="lg:col-span-1">
                <motion.div
                  key={`info-${currentLocation}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-8 sticky top-24"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Info className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-primary font-serif">Location Details</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-3">Highlights:</p>
                      <ul className="space-y-2">
                        {location.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-2 text-secondary text-sm">
                            <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-sm font-semibold text-secondary mb-3">Navigation:</p>
                      <div className="flex gap-3">
                        <button
                          onClick={prevLocation}
                          className="flex-1 bg-secondary/10 hover:bg-secondary/20 text-primary py-2 rounded-lg font-semibold transition-colors"
                        >
                          ← Previous
                        </button>
                        <button
                          onClick={nextLocation}
                          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 py-2 rounded-lg font-semibold transition-colors"
                        >
                          Next →
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-lg font-semibold transition-colors"
                      >
                        {showInfo ? 'Hide' : 'Show'} Full Description
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Campus Highlights</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourLocations.map((loc, index) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setCurrentLocation(index)}
                  className="bg-primary-foreground/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors cursor-pointer group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{loc.icon}</div>
                  <h3 className="text-lg font-bold mb-2 font-serif">{loc.name}</h3>
                  <p className="text-sm text-primary-foreground/90 line-clamp-2">{loc.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif text-primary">Ready to Experience Elite Academy?</h2>
              <p className="text-secondary mb-8 max-w-2xl mx-auto">
                Schedule an in-person campus visit to see our facilities firsthand and meet our dedicated team.
              </p>
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Campus Visit
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
