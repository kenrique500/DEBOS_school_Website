import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Secondary Section Page - Academic Heritage Design
 * Features: Academic departments, leadership programs, clubs, career preparation
 */

export default function Secondary() {
  const departments = [
    {
      name: 'Science Department',
      description: 'Advanced Physics, Chemistry, and Biology with state-of-the-art laboratories',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Integrated Science'],
    },
    {
      name: 'Arts Department',
      description: 'Literature, History, Geography, and Social Sciences with critical thinking focus',
      subjects: ['English Literature', 'History', 'Geography', 'Economics'],
    },
    {
      name: 'Commercial Department',
      description: 'Business Studies, Accounting, and Entrepreneurship for future business leaders',
      subjects: ['Business Studies', 'Accounting', 'Economics', 'ICT'],
    },
  ];

  const clubs = [
    { name: 'Debate Club', icon: '🎤', desc: 'Public speaking and argumentation skills' },
    { name: 'ICT Club', icon: '💻', desc: 'Programming and technology innovation' },
    { name: 'Sports Teams', icon: '⚽', desc: 'Football, Basketball, Tennis, Swimming' },
    { name: 'Model UN', icon: '🌍', desc: 'International diplomacy and leadership' },
    { name: 'Science Club', icon: '🔬', desc: 'Research projects and experiments' },
    { name: 'Arts Society', icon: '🎨', desc: 'Drama, music, and visual arts' },
  ];

  const programs = [
    {
      title: 'Leadership Development',
      description: 'Intensive programs to develop leadership skills, decision-making, and team management',
    },
    {
      title: 'Career Guidance',
      description: 'Professional counseling to help students choose appropriate career paths',
    },
    {
      title: 'University Preparation',
      description: 'Specialized coaching for university entrance exams and applications',
    },
    {
      title: 'Internship Programs',
      description: 'Real-world experience through partnerships with leading organizations',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Secondary Section</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Preparing Leaders Through Advanced Academics</p>
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
                <h2 className="section-title mb-6">Excellence in Secondary Education</h2>
                <div className="w-16 h-1 bg-accent mb-8" />
                <p className="text-secondary mb-4 leading-relaxed">
                  Our Secondary Section (Classes 7-12) is designed to challenge and inspire young scholars. We offer a rigorous curriculum that balances academic excellence with character development, preparing students for university and beyond.
                </p>
                <p className="text-secondary mb-6 leading-relaxed">
                  With advanced laboratories, experienced faculty, and a focus on critical thinking, our students develop the intellectual foundation and leadership qualities needed to excel in a competitive global environment.
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
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Academic Departments */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Academic Departments</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-3 font-serif">{dept.name}</h3>
                  <p className="text-primary-foreground/90 mb-6 text-sm">{dept.description}</p>
                  <div className="space-y-2">
                    {dept.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Preparation Programs */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Career Preparation Programs</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">{program.title}</h3>
                  <p className="text-secondary text-sm">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clubs & Activities */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Clubs & Activities</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-6 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="text-4xl mb-3">{club.icon}</div>
                  <h4 className="font-bold mb-2">{club.name}</h4>
                  <p className="text-sm text-primary-foreground/90">{club.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Focus */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Leadership Development</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Student Council',
                  desc: 'Elected student leaders managing school affairs and organizing events',
                },
                {
                  icon: Users,
                  title: 'Mentorship Program',
                  desc: 'Senior students mentor junior students, fostering responsibility and guidance',
                },
                {
                  icon: Globe,
                  title: 'Global Perspectives',
                  desc: 'International exchange programs and global citizenship initiatives',
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

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Ready to Lead Tomorrow?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join our Secondary Section and become part of a community that values excellence, leadership, and innovation.
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
