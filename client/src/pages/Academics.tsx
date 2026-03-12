import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, TrendingUp, Wrench, CheckCircle } from 'lucide-react';

/**
 * Academics Page - Professional Modern Design
 * Features: Curriculum details, teaching methodology, assessment, resources
 * Cameroon secondary education system with four departments
 */

export default function Academics() {
  const teachingMethodology = [
    {
      icon: BookOpen,
      title: 'Student-Centered Learning',
      description: 'Active participation and critical thinking encouraged in all classes',
    },
    {
      icon: Microscope,
      title: 'Practical Experimentation',
      description: 'Hands-on laboratory work and field studies for science subjects',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Assessment',
      description: 'Regular evaluations tracking progress and identifying support needs',
    },
    {
      icon: Wrench,
      title: 'Technology Integration',
      description: 'Modern teaching tools and digital resources in all classrooms',
    },
  ];

  const assessmentMethods = [
    'Continuous Assessment (CA) - 40%',
    'Mid-Term Examinations - 30%',
    'End-of-Term Examinations - 30%',
    'Project Work & Presentations',
    'Practical Examinations (Science & Technical)',
    'Portfolio Development',
  ];

  const facilities = [
    {
      name: 'Science Laboratories',
      description: 'Fully equipped Physics, Chemistry, and Biology labs with modern apparatus',
    },
    {
      name: 'Computer Center',
      description: 'State-of-the-art ICT facility with 60+ computers and high-speed internet',
    },
    {
      name: 'Library & Resource Center',
      description: '5,000+ books, journals, and digital resources for research',
    },
    {
      name: 'Technical Workshop',
      description: 'Equipped with tools and machinery for technical studies',
    },
    {
      name: 'Art Studio',
      description: 'Creative space for visual arts and design projects',
    },
    {
      name: 'Multimedia Center',
      description: 'Audio-visual equipment for presentations and media projects',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Academics</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Rigorous Curriculum, World-Class Instruction</p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Structure */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Curriculum Structure</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
              <p className="text-secondary mt-6 max-w-2xl mx-auto text-lg">
                Comprehensive curriculum aligned with Cameroon's education standards and international best practices
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  level: 'Form 1 – Form 3',
                  title: 'Lower Secondary',
                  description: 'Foundation years with broad-based curriculum',
                  subjects: [
                    'English Language & Literature',
                    'French Language & Literature',
                    'Mathematics',
                    'Integrated Science',
                    'History',
                    'Geography',
                    'Civic Education',
                    'Physical Education',
                    'Arts & Crafts',
                  ],
                },
                {
                  level: 'Form 4 – Form 5',
                  title: 'Upper Secondary',
                  description: 'Specialized studies in chosen departments',
                  subjects: [
                    'Department-specific core subjects',
                    'Advanced Mathematics',
                    'English & French Literature',
                    'History/Geography (electives)',
                    'Physical Education',
                    'Computer Science',
                  ],
                },
                {
                  level: 'Lower & Upper Sixth',
                  title: 'Sixth Form',
                  description: 'Advanced level preparation for university',
                  subjects: [
                    'Specialized department subjects',
                    'Advanced Mathematics/Further Mathematics',
                    'Literature & Language Studies',
                    'Research & Project Work',
                    'Career Development',
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:flex-1">
                      <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                        {item.level}
                      </span>
                      <h3 className="text-2xl font-bold text-primary mb-2 font-serif">{item.title}</h3>
                      <p className="text-secondary mb-6">{item.description}</p>
                    </div>
                    <div className="md:flex-1">
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Core Subjects</p>
                      <div className="grid grid-cols-1 gap-2">
                        {item.subjects.map((subject, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-secondary text-sm">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Teaching Methodology</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teachingMethodology.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-foreground/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/20"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 font-serif">{method.title}</h3>
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">{method.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Assessment Methods */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Assessment Methods</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Comprehensive Evaluation</h3>
                <ul className="space-y-3">
                  {assessmentMethods.map((method, idx) => (
                    <li key={idx} className="flex gap-3 text-secondary">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{method}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Grading System</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold text-primary">A (Excellent)</span>
                    <span className="text-secondary">90-100%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold text-primary">B (Very Good)</span>
                    <span className="text-secondary">80-89%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold text-primary">C (Good)</span>
                    <span className="text-secondary">70-79%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold text-primary">D (Satisfactory)</span>
                    <span className="text-secondary">60-69%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold text-primary">E (Pass)</span>
                    <span className="text-secondary">50-59%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">F (Fail)</span>
                    <span className="text-secondary">Below 50%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Learning Facilities</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/20"
                >
                  <h3 className="text-lg font-bold mb-2 font-serif">{facility.name}</h3>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">{facility.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Support */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Academic Support Services</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4 font-serif">Tutoring Programs</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Personalized tutoring for students needing additional support in specific subjects or exam preparation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4 font-serif">Counseling Services</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Academic and personal counseling to help students navigate challenges and achieve their goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4 font-serif">Study Groups</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Peer-led study groups and collaborative learning sessions to enhance understanding and retention.
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
