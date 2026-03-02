import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Target, Zap, Award } from 'lucide-react';

/**
 * Academics Page - Academic Heritage Design
 * Features: Curriculum overview, learning approach, academic calendar
 */

export default function Academics() {
  const approaches = [
    {
      icon: BookOpen,
      title: 'Inquiry-Based Learning',
      description: 'Students explore concepts through questions, experiments, and discovery rather than passive reception.',
    },
    {
      icon: Target,
      title: 'Competency-Based Education',
      description: 'Focus on developing practical skills and competencies applicable to real-world scenarios.',
    },
    {
      icon: Zap,
      title: 'Technology Integration',
      description: 'Strategic use of digital tools and platforms to enhance learning and prepare for digital age.',
    },
    {
      icon: Award,
      title: 'Continuous Assessment',
      description: 'Regular feedback and evaluation to track progress and support personalized learning pathways.',
    },
  ];

  const examBoards = [
    { name: 'Cambridge International', desc: 'IGCSE and A-Level examinations' },
    { name: 'International Baccalaureate', desc: 'IB Diploma and Middle Years Programme' },
    { name: 'WAEC', desc: 'West African Examinations Council' },
    { name: 'NECO', desc: 'National Examination Council' },
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
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp)',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Our Academics</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Rigorous Curriculum, Innovative Teaching, Global Standards</p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Curriculum Overview</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  level: 'Primary (Classes 1-6)',
                  focus: 'Foundation Building',
                  details: [
                    'Core subjects with hands-on learning',
                    'Development of critical thinking',
                    'Character and social-emotional growth',
                    'Extracurricular activities integration',
                  ],
                },
                {
                  level: 'Junior Secondary (Classes 7-9)',
                  focus: 'Skill Development',
                  details: [
                    'Broad subject exposure',
                    'Introduction to specialization',
                    'Research and project-based learning',
                    'Leadership and teamwork emphasis',
                  ],
                },
                {
                  level: 'Senior Secondary (Classes 10-12)',
                  focus: 'Specialization & Excellence',
                  details: [
                    'Advanced subject specialization',
                    'University preparation',
                    'Career guidance and counseling',
                    'International examination boards',
                  ],
                },
              ].map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-primary mb-2 font-serif">{level.level}</h3>
                  <p className="text-accent font-semibold mb-4">{level.focus}</p>
                  <ul className="space-y-2">
                    {level.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 text-secondary text-sm">
                        <span className="text-accent">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Our Learning Approach</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approaches.map((approach, index) => {
                const Icon = approach.icon;
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
                    <h3 className="text-lg font-bold mb-2 font-serif">{approach.title}</h3>
                    <p className="text-sm text-primary-foreground/90">{approach.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Co-Curricular Integration */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Co-Curricular Integration</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Holistic Development</h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  At Elite Academy, we believe that true education extends beyond the classroom. Our co-curricular programs are carefully designed to complement academic learning and develop well-rounded individuals.
                </p>
                <ul className="space-y-3">
                  {[
                    'Sports and physical fitness programs',
                    'Arts, music, and drama productions',
                    'Debate and public speaking clubs',
                    'Science and technology competitions',
                    'Community service and social responsibility',
                    'Leadership and entrepreneurship programs',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-secondary">
                      <span className="text-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Examination Boards */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Examination Boards</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {examBoards.map((board, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm text-center"
                >
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 font-serif">{board.name}</h3>
                  <p className="text-sm text-primary-foreground/90">{board.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Academic Calendar</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {[
                  { term: 'First Term', duration: 'January - March', activities: 'Classes, Assessments, Sports' },
                  { term: 'Second Term', duration: 'April - June', activities: 'Classes, Exams, Cultural Events' },
                  { term: 'Third Term', duration: 'July - September', activities: 'Classes, Assessments, Summer Programs' },
                  { term: 'Fourth Term', duration: 'October - December', activities: 'Classes, Finals, Prize Giving' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 pb-6 border-b border-border last:border-b-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary font-serif">{item.term}</h3>
                      <p className="text-secondary text-sm">{item.duration}</p>
                      <p className="text-secondary text-sm mt-1">{item.activities}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded"
            >
              <p className="text-secondary">
                <strong>Note:</strong> The academic calendar may be adjusted based on national holidays and special events. A detailed calendar is provided to parents at the beginning of each academic year.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
