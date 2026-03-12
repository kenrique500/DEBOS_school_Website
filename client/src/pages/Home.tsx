import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Sparkles, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Home Page - Academic Heritage Design
 * Features: Hero section, value propositions, stats, featured sections
 * Design: Deep navy background, gold accents, elegant typography
 */

// Animated counter component
function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}+
      </div>
      <p className="text-sm md:text-base text-secondary">{label}</p>
    </div>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const valueCards = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'World-class curriculum with proven track record of exceptional results and university placements.',
    },
    {
      icon: Users,
      title: 'Character Development',
      description: 'Holistic education fostering integrity, leadership, and social responsibility in every student.',
    },
    {
      icon: Sparkles,
      title: 'Modern Facilities',
      description: 'State-of-the-art laboratories, libraries, sports complexes, and technology-enabled classrooms.',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure, nurturing campus with comprehensive student welfare and pastoral care systems.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-primary/60" />
          </div>

          {/* Content */}
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-serif leading-tight">
                DEBOS Bilingual Secondary School
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-4 max-w-xl">
                Kombe, Kotto Road Benabocko, Mongo Division, Cameroon
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl">
                Excellence in Bilingual Education. Shaping Global Leaders Through Academic Rigor and Character Development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/secondary">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold">
                    Explore Our School
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 font-semibold"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary-foreground rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Why Choose Elite Academy</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {valueCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif">{card.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* School at a Glance */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">School at a Glance</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <motion.div variants={itemVariants}>
                <AnimatedCounter target={25} label="Years of Excellence" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedCounter target={1500} label="Students Enrolled" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedCounter target={35} label="Clubs & Activities" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedCounter target={120} label="Awards Won" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Sections Preview */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Explore Our School</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary Section Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-80"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2 font-serif">Primary Section</h3>
                  <p className="text-primary-foreground/90 mb-4">Nurturing young minds with creativity and foundational excellence</p>
                  <Link href="/primary">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Secondary Section Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-80"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2 font-serif">Secondary Section</h3>
                  <p className="text-primary-foreground/90 mb-4">Preparing leaders through advanced academics and leadership programs</p>
                  <Link href="/secondary">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Additional Featured Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Campus Life */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-64"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2 font-serif">Campus Life</h3>
                  <Link href="/activities">
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-fit">
                      Explore
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Facilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-64"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/campus-facilities-ZpsMkZA6aYPx5tSnNtvhoE.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2 font-serif">Facilities</h3>
                  <Link href="/campus">
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-fit">
                      Explore
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-64"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-accent to-primary"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-serif">Gallery</h3>
                  <Link href="/gallery">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                      View Gallery
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Ready to Join Elite Academy?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Schedule a campus visit and discover why Elite Academy is the choice of families seeking excellence.
              </p>
              <Link href="/admissions">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold">
                  Book Your Visit Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
