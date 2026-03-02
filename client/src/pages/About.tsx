import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Award, Target, Heart } from 'lucide-react';

/**
 * About Page - Academic Heritage Design
 * Features: School history, vision, mission, core values, leadership message
 */

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Commitment to the highest standards in academic and personal achievement.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty, ethical conduct, and moral responsibility in all actions.',
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Developing confident, capable leaders who inspire positive change.',
    },
    {
      icon: Check,
      title: 'Community',
      description: 'Fostering inclusive, supportive environment where all thrive together.',
    },
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
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp)',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">About Elite Academy</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Our Story of Excellence, Innovation, and Impact</p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-6">Our History</h2>
                <div className="w-16 h-1 bg-accent mb-8" />
                <p className="text-secondary mb-4 leading-relaxed">
                  Founded in 1999, Elite Academy has grown from a small institution to one of the region's most respected educational establishments. Our journey reflects a steadfast commitment to academic excellence and holistic development.
                </p>
                <p className="text-secondary mb-4 leading-relaxed">
                  Over the past two decades, we have educated thousands of students who have gone on to excel in universities worldwide and become leaders in their respective fields. Our alumni network spans across continents, united by the values and education they received at Elite Academy.
                </p>
                <p className="text-secondary leading-relaxed">
                  Today, with over 1,500 students and a dedicated faculty of 120+ educators, we continue to set new benchmarks in educational excellence while remaining true to our founding principles.
                </p>
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

        {/* Vision & Mission */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-3xl font-bold mb-4 font-serif">Our Vision</h3>
                <div className="w-12 h-1 bg-accent mb-6" />
                <p className="text-lg leading-relaxed text-primary-foreground/95">
                  To be a globally recognized institution that develops intellectually curious, ethically grounded, and compassionate leaders who create positive change in their communities and the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-3xl font-bold mb-4 font-serif">Our Mission</h3>
                <div className="w-12 h-1 bg-accent mb-6" />
                <p className="text-lg leading-relaxed text-primary-foreground/95">
                  To provide world-class education that nurtures academic excellence, fosters character development, encourages innovation, and empowers students to become responsible global citizens.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Our Core Values</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif">{value.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8 font-serif">Message from Our Principal</h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-8" />
              <p className="text-lg leading-relaxed mb-6 text-primary-foreground/95">
                "At Elite Academy, we believe that education extends far beyond textbooks and examinations. We are committed to nurturing young minds that are not only academically brilliant but also morally upright and socially responsible. Every student who walks through our gates is unique, and our mission is to help them discover their potential and realize their dreams."
              </p>
              <p className="text-lg leading-relaxed mb-8 text-primary-foreground/95">
                "We take pride in our holistic approach to education, where academic rigor is balanced with character development, innovation is encouraged, and every voice is heard. Our dedicated faculty, state-of-the-art facilities, and supportive community create an environment where excellence flourishes."
              </p>
              <p className="text-lg leading-relaxed text-primary-foreground/95">
                "I invite you to join the Elite Academy family and be part of a journey that shapes not just successful professionals, but compassionate leaders who will make a difference in the world."
              </p>
              <div className="mt-8 pt-8 border-t border-primary-foreground/30">
                <p className="font-bold text-lg">Dr. Margaret Richardson</p>
                <p className="text-primary-foreground/80">Principal, Elite Academy</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accreditation & Affiliations */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Accreditations & Affiliations</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'International Baccalaureate (IB)', desc: 'Authorized IB World School offering comprehensive international curriculum' },
                { title: 'Cambridge Assessment', desc: 'Recognized Cambridge International School with IGCSE and A-Level programs' },
                { title: 'WAEC & NECO', desc: 'Registered examination center for West African Examinations Council' },
              ].map((accred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{accred.title}</h3>
                  <p className="text-secondary text-sm">{accred.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
