import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Music, Zap, Trophy, Users } from 'lucide-react';

/**
 * Activities & Student Life Page - Academic Heritage Design
 * Features: Sports, arts, clubs, events, student engagement
 */

export default function Activities() {
  const sportTeams = [
    { name: 'Football', icon: '⚽', desc: 'Inter-house and inter-school competitions' },
    { name: 'Basketball', icon: '🏀', desc: 'Competitive league and friendly matches' },
    { name: 'Tennis', icon: '🎾', desc: 'Individual and doubles tournaments' },
    { name: 'Swimming', icon: '🏊', desc: 'Training and competitive events' },
    { name: 'Volleyball', icon: '🏐', desc: 'Team-based competitive sports' },
    { name: 'Athletics', icon: '🏃', desc: 'Track and field competitions' },
  ];

  const clubs = [
    { name: 'Debate Club', icon: '🎤', desc: 'Public speaking and argumentation' },
    { name: 'Science Club', icon: '🔬', desc: 'Experiments and research projects' },
    { name: 'Art & Design', icon: '🎨', desc: 'Visual arts and creative expression' },
    { name: 'Music Society', icon: '🎵', desc: 'Choir, band, and instrumental training' },
    { name: 'Drama Club', icon: '🎭', desc: 'Theater productions and performances' },
    { name: 'Coding Club', icon: '💻', desc: 'Programming and technology innovation' },
    { name: 'Photography Club', icon: '📸', desc: 'Visual storytelling and techniques' },
    { name: 'Environmental Club', icon: '🌱', desc: 'Sustainability and conservation' },
  ];

  const events = [
    {
      title: 'Annual Sports Day',
      date: 'March',
      description: 'Inter-house competitions showcasing athletic excellence and team spirit',
    },
    {
      title: 'Cultural Festival',
      date: 'May',
      description: 'Celebration of diverse cultures through performances, food, and art',
    },
    {
      title: 'Science Exhibition',
      date: 'July',
      description: 'Student projects and innovations in STEM displayed for community',
    },
    {
      title: 'Debate Competition',
      date: 'August',
      description: 'Inter-school debate tournament featuring top student debaters',
    },
    {
      title: 'Annual Concert',
      date: 'September',
      description: 'Musical performances by student bands, orchestras, and soloists',
    },
    {
      title: 'Prize Giving Ceremony',
      date: 'December',
      description: 'Recognition of academic and co-curricular achievements throughout the year',
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
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp)',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Activities & Student Life</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Beyond Academics: A Vibrant Community of Learning and Growth</p>
            </motion.div>
          </div>
        </section>

        {/* Sports Programs */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Sports Programs</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sportTeams.map((sport, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{sport.icon}</div>
                  <h3 className="font-bold text-primary mb-2 font-serif">{sport.name}</h3>
                  <p className="text-secondary text-xs">{sport.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clubs & Organizations */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Clubs & Organizations</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="text-4xl mb-3">{club.icon}</div>
                  <h3 className="font-bold mb-2 font-serif">{club.name}</h3>
                  <p className="text-sm text-primary-foreground/90">{club.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Why Student Life Matters</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Trophy,
                  title: 'Building Confidence',
                  desc: 'Students develop self-assurance through participation and achievement',
                },
                {
                  icon: Users,
                  title: 'Social Skills',
                  desc: 'Teamwork, collaboration, and friendship building through shared activities',
                },
                {
                  icon: Music,
                  title: 'Creative Expression',
                  desc: 'Opportunities to discover and develop artistic and creative talents',
                },
                {
                  icon: Zap,
                  title: 'Leadership',
                  desc: 'Taking on roles and responsibilities that develop leadership qualities',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg text-center"
                  >
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-primary mb-2 font-serif">{item.title}</h3>
                    <p className="text-secondary text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Annual Events</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm text-center">{event.date}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 font-serif">{event.title}</h3>
                      <p className="text-sm text-primary-foreground/90">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">What Our Students Say</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chioma Okafor',
                  grade: 'Class 11',
                  quote: 'Elite Academy has given me opportunities to grow both academically and personally. The clubs and sports programs have made me a more confident person.',
                },
                {
                  name: 'David Chen',
                  grade: 'Class 10',
                  quote: 'I love the vibrant community here. Whether it\'s the debate club or sports, there\'s something for everyone. My friends are like family.',
                },
                {
                  name: 'Amara Adeyemi',
                  grade: 'Class 9',
                  quote: 'The teachers genuinely care about our development. The activities are not just fun; they teach us real-world skills and values.',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-secondary mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-primary font-serif">{testimonial.name}</p>
                    <p className="text-secondary text-sm">{testimonial.grade}</p>
                  </div>
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
