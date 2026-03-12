import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Sparkles, Globe, Award, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Home Page - Professional Modern Design
 * Features: Hero section, departments showcase, stats, value propositions, featured sections
 * Design: Deep Teal primary, Emerald secondary, Gold accents
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
      <p className="text-sm md:text-base text-primary-foreground/90">{label}</p>
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

  const departments = [
    {
      icon: BookOpen,
      name: 'Arts Department',
      description: 'Literature, History, Geography, Economics, and Social Sciences',
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: Sparkles,
      name: 'Science Department',
      description: 'Physics, Chemistry, Biology, and Advanced Laboratory Sciences',
      color: 'from-green-50 to-green-100',
    },
    {
      icon: Globe,
      name: 'Commercial Department',
      description: 'Business Studies, Accounting, Economics, and ICT',
      color: 'from-amber-50 to-amber-100',
    },
    {
      icon: Zap,
      name: 'Technical Department',
      description: 'Engineering, Technology, and Practical Skills Development',
      color: 'from-purple-50 to-purple-100',
    },
  ];

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
      icon: Globe,
      title: 'Global Perspective',
      description: 'Bilingual education preparing students for international opportunities and global citizenship.',
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
          </div>

          {/* Content */}
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-serif leading-tight">
                DEBOS Bilingual Secondary School
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4 max-w-2xl font-medium">
                Kombe, Kotto Road Benabocko, Mongo Division, Cameroon
              </p>
              <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl leading-relaxed">
                Excellence in Bilingual Education. Shaping Global Leaders Through Academic Rigor, Character Development, and Innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/secondary">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold shadow-lg">
                    Explore Our School
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 font-semibold"
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

        {/* Academic Departments Showcase */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Our Academic Departments</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
              <p className="text-secondary mt-6 max-w-2xl mx-auto text-lg">
                Four specialized departments offering comprehensive education aligned with Cameroon's secondary education system
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`bg-gradient-to-br ${dept.color} p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50`}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif">{dept.name}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{dept.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Why Choose DEBOS</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
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
                    className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/20"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-3 font-serif">{card.title}</h3>
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* School at a Glance */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">School at a Glance</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
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
                <AnimatedCounter target={85} label="Faculty Members" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedCounter target={120} label="Awards Won" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Class Structure Preview */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Cameroon Secondary Education System</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm border border-primary-foreground/20"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif">Lower Secondary</h3>
                <p className="text-primary-foreground/90 mb-4">Form 1 – Form 3</p>
                <p className="text-sm text-primary-foreground/80">Foundation years focusing on core subjects and general education across all departments.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent/20 p-8 rounded-lg border-2 border-accent"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif text-accent">Upper Secondary</h3>
                <p className="text-primary-foreground/90 mb-4">Form 4 – Form 5</p>
                <p className="text-sm text-primary-foreground/80">Specialized studies in chosen departments with advanced subject specialization.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm border border-primary-foreground/20"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif">Sixth Form</h3>
                <p className="text-primary-foreground/90 mb-4">Lower & Upper Sixth</p>
                <p className="text-sm text-primary-foreground/80">Advanced level studies preparing students for university entrance and professional careers.</p>
              </motion.div>
            </div>
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
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Secondary Section Card */}
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
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2 font-serif">Secondary Section</h3>
                  <p className="text-primary-foreground/90 mb-4">Comprehensive education for Form 1 through Upper Sixth with specialized departments</p>
                  <Link href="/secondary">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Academics Card */}
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
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-secondary/50 group-hover:bg-secondary/60 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2 font-serif">Academics</h3>
                  <p className="text-primary-foreground/90 mb-4">Rigorous curriculum aligned with Cameroon's education standards and international best practices</p>
                  <Link href="/academics">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit font-semibold">
                      Discover More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Ready to Join DEBOS?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Take the first step towards excellence. Apply now and become part of our thriving academic community.
              </p>
              <Link href="/admissions">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 font-semibold shadow-lg">
                  Start Your Application
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
