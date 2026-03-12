import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Users, Utensils, Trophy, Moon } from 'lucide-react';

/**
 * Day in Life Page - Academic Heritage Design
 * Features: Timeline of a student's day, activities, and experiences
 */

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function DayInLife() {
  const timeline: TimelineEvent[] = [
    {
      time: '7:00 AM',
      title: 'Morning Arrival',
      description: 'Students arrive at school via our comfortable bus service or personal transport. Morning assembly begins with the national anthem and announcements.',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-orange-400 to-red-500',
    },
    {
      time: '7:30 AM',
      title: 'Assembly & Briefing',
      description: 'All students gather for morning assembly where school announcements are made, achievements are celebrated, and the day is set with positive energy.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      time: '8:00 AM - 10:30 AM',
      title: 'Morning Classes',
      description: 'Intensive academic sessions with focus on core subjects. Teachers use interactive smart boards and collaborative learning techniques to engage students.',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-600',
    },
    {
      time: '10:30 AM - 11:00 AM',
      title: 'Break Time',
      description: 'Students enjoy refreshments and socialize with friends. This break allows them to recharge before the next session of classes.',
      icon: <Utensils className="w-6 h-6" />,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      time: '11:00 AM - 1:00 PM',
      title: 'Specialized Classes',
      description: 'Departmental classes in Science, Arts, or Commercial streams. Hands-on experiments in labs, debates, or practical projects based on specialization.',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-purple-400 to-purple-600',
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Lunch Break',
      description: 'Students enjoy nutritious meals prepared by professional chefs. The cafeteria offers diverse menu options catering to various dietary preferences.',
      icon: <Utensils className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-600',
    },
    {
      time: '2:00 PM - 3:30 PM',
      title: 'Co-Curricular Activities',
      description: 'Sports training, club meetings, art classes, music lessons, or debate practice. Students pursue their passions and develop diverse skills.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      time: '3:30 PM - 4:00 PM',
      title: 'Dismissal',
      description: 'Students prepare to leave school. Final announcements and reminders about homework and upcoming events. Buses depart for home.',
      icon: <Moon className="w-6 h-6" />,
      color: 'from-slate-400 to-slate-600',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">A Day in the Life</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Experience a Typical Day at Elite Academy</p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">From Morning to Evening</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center text-white flex-shrink-0`}>
                          {event.icon}
                        </div>
                        <div>
                          <p className="text-accent font-bold text-sm">{event.time}</p>
                          <h3 className="text-xl font-bold text-primary font-serif">{event.title}</h3>
                        </div>
                      </div>
                      <p className="text-secondary leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${event.color} border-4 border-background`}
                    />
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-accent to-secondary/30 mt-2" />
                    )}
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Spotlight */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Meet Our Students</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chioma Okafor',
                  class: 'Class 11',
                  interests: 'Science, Debate, Basketball',
                  quote: 'Every day at Elite Academy is an opportunity to learn something new and grow as a person.',
                },
                {
                  name: 'David Chen',
                  class: 'Class 10',
                  interests: 'Mathematics, Coding, Music',
                  quote: 'The balance between academics and activities helps me develop into a well-rounded individual.',
                },
                {
                  name: 'Amara Adeyemi',
                  class: 'Class 9',
                  interests: 'Arts, Drama, Environmental Club',
                  quote: 'I love the supportive community here. Teachers care about our success and growth.',
                },
              ].map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-lg font-bold text-center mb-1 font-serif">{student.name}</h3>
                  <p className="text-accent text-sm text-center mb-3">{student.class}</p>
                  <p className="text-sm text-primary-foreground/80 text-center mb-4">
                    <strong>Interests:</strong> {student.interests}
                  </p>
                  <p className="text-primary-foreground/90 italic text-center text-sm">"{student.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Elite */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">What Makes Our Days Special</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Holistic Development', desc: 'Academics combined with sports, arts, and character building' },
                { title: 'Supportive Community', desc: 'Teachers and peers who care about your success and well-being' },
                { title: 'Modern Facilities', desc: 'State-of-the-art labs, libraries, and sports equipment' },
                { title: 'Diverse Activities', desc: 'Clubs, sports, and co-curricular programs for every interest' },
                { title: 'Experienced Faculty', desc: 'Dedicated teachers committed to student excellence' },
                { title: 'Safe Environment', desc: 'Secure campus with 24/7 security and pastoral care' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.desc}</p>
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
