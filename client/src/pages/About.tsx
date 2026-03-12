import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Users, Award, Globe } from 'lucide-react';

/**
 * About Page - Professional Modern Design
 * Features: School mission, vision, values, history, leadership
 */

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty and moral principles in all our endeavors.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Pursuing academic and personal excellence in every aspect of school life.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing creativity and forward-thinking approaches to education and problem-solving.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive, inclusive community where every member is valued and respected.',
    },
    {
      icon: Award,
      title: 'Accountability',
      description: 'Taking responsibility for our actions and outcomes with transparency and dedication.',
    },
    {
      icon: Globe,
      title: 'Global Citizenship',
      description: 'Preparing students to be responsible, informed citizens of the world.',
    },
  ];

  const milestones = [
    { year: '1999', event: 'School Founded', description: 'DEBOS Bilingual Secondary School established in Kombe' },
    { year: '2005', event: 'Expansion', description: 'Expanded facilities and introduced specialized departments' },
    { year: '2012', event: 'Recognition', description: 'Achieved national recognition for academic excellence' },
    { year: '2018', event: 'Modernization', description: 'Upgraded technology infrastructure and learning facilities' },
    { year: '2023', event: 'Global Partnership', description: 'Established international partnerships for student exchange' },
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">About DEBOS</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Shaping Excellence Through Bilingual Education Since 1999</p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-secondary"
              >
                <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Mission</h2>
                <p className="text-secondary leading-relaxed text-lg">
                  To provide a world-class bilingual education that develops intellectually curious, morally upright, and globally-minded students who excel academically and contribute meaningfully to society.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-accent"
              >
                <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Vision</h2>
                <p className="text-secondary leading-relaxed text-lg">
                  To be the leading bilingual secondary school in Cameroon, recognized for academic excellence, innovative teaching, character development, and the production of future leaders who transform their communities and the world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Core Values</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/20"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif">{value.title}</h3>
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* School History */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Our Journey</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                  >
                    <div className="flex-1 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-primary font-serif mb-2">{milestone.event}</h3>
                        <p className="text-secondary text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex w-12 h-12 bg-accent rounded-full items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-6 h-6 bg-primary rounded-full" />
                    </div>

                    <div className="flex-1">
                      <div className="text-center md:text-left">
                        <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">What Makes Us Different</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif">Bilingual Excellence</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  We provide comprehensive bilingual education in English and French, preparing students for a globalized world while maintaining strong connections to Cameroonian culture and identity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif">Specialized Departments</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Our four specialized departments (Arts, Science, Commercial, Technical) allow students to pursue their passions and develop expertise in their chosen fields while maintaining a broad educational foundation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-4 font-serif">Holistic Development</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Beyond academics, we focus on character development, leadership training, and extracurricular excellence, ensuring our students become well-rounded individuals ready for life's challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
