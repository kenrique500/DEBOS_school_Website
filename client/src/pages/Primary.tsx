import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Primary Section Page - Academic Heritage Design
 * Features: Overview, teaching philosophy, subjects, activities, teacher profiles
 */

export default function Primary() {
  const subjects = [
    { name: 'English Language', desc: 'Communication, literature, and creative writing' },
    { name: 'Mathematics', desc: 'Numeracy, problem-solving, and logical thinking' },
    { name: 'Science', desc: 'Integrated science with hands-on experiments' },
    { name: 'Social Studies', desc: 'History, geography, and civic education' },
    { name: 'Arts & Crafts', desc: 'Visual arts, music, and creative expression' },
    { name: 'Physical Education', desc: 'Sports, fitness, and motor skill development' },
  ];

  const activities = [
    { title: 'Debate Club', icon: '🎤' },
    { title: 'Science Club', icon: '🔬' },
    { title: 'Art & Design', icon: '🎨' },
    { title: 'Sports Teams', icon: '⚽' },
    { title: 'Music & Drama', icon: '🎭' },
    { title: 'Coding Club', icon: '💻' },
  ];

  const teachers = [
    { name: 'Mrs. Sarah Johnson', subject: 'English & Literature', experience: '12 years' },
    { name: 'Mr. David Chen', subject: 'Mathematics', experience: '10 years' },
    { name: 'Ms. Emily Watson', subject: 'Science', experience: '9 years' },
    { name: 'Mr. James Okafor', subject: 'Social Studies', experience: '11 years' },
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
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp)',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Primary Section</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Nurturing Young Minds with Creativity and Excellence</p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-6">Welcome to Primary</h2>
                <div className="w-16 h-1 bg-accent mb-8" />
                <p className="text-secondary mb-4 leading-relaxed">
                  Our Primary Section (Classes 1-6) provides a nurturing environment where young learners develop foundational academic skills alongside critical thinking and creativity. We believe in making learning engaging, interactive, and fun.
                </p>
                <p className="text-secondary mb-6 leading-relaxed">
                  With a student-to-teacher ratio of 15:1, our experienced educators ensure personalized attention to each child's learning needs. We combine traditional academic rigor with innovative teaching methodologies to foster a love for learning.
                </p>
                <Link href="/admissions">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Our Teaching Philosophy</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Lightbulb, title: 'Inquiry-Based Learning', desc: 'Students ask questions and explore answers through discovery' },
                { icon: Users, title: 'Collaborative Learning', desc: 'Teamwork and peer interaction enhance understanding' },
                { icon: BookOpen, title: 'Holistic Development', desc: 'Academic, social, emotional, and physical growth' },
                { icon: Trophy, title: 'Celebrating Success', desc: 'Recognition of effort and achievement at all levels' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm text-center"
                  >
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2 font-serif">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/90">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Subjects Offered */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Subjects We Offer</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-primary mb-2 font-serif">{subject.name}</h3>
                  <p className="text-secondary text-sm">{subject.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities & Clubs */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Activities & Clubs</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-6 rounded-lg text-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <p className="font-semibold">{activity.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Teachers */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Meet Our Primary Teachers</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-accent to-primary" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-1 font-serif">{teacher.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-2">{teacher.subject}</p>
                    <p className="text-secondary text-sm">{teacher.experience} of teaching experience</p>
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Give Your Child the Best Start</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join our Primary Section and watch your child flourish in an environment designed for growth and excellence.
              </p>
              <Link href="/admissions">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold">
                  Schedule a Campus Visit
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
