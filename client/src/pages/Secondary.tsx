import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, Users, Globe, Award, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Secondary Section Page - Professional Modern Design
 * Features: Academic departments, class structure, leadership programs, clubs
 * Cameroon secondary system: Form 1-5, Lower Sixth, Upper Sixth
 */

export default function Secondary() {
  const departments = [
    {
      icon: BookOpen,
      name: 'Arts Department',
      description: 'Comprehensive study of humanities and social sciences',
      subjects: ['English Literature', 'French Literature', 'History', 'Geography', 'Economics', 'Philosophy'],
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: Sparkles,
      name: 'Science Department',
      description: 'Advanced study of natural sciences and mathematics',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Further Mathematics', 'Computer Science'],
      color: 'from-green-50 to-green-100',
    },
    {
      icon: Globe,
      name: 'Commercial Department',
      description: 'Business and economics focused curriculum',
      subjects: ['Accounting', 'Business Studies', 'Economics', 'ICT', 'Marketing', 'Entrepreneurship'],
      color: 'from-amber-50 to-amber-100',
    },
    {
      icon: Zap,
      name: 'Technical Department',
      description: 'Engineering and practical skills development',
      subjects: ['Engineering Science', 'Technical Drawing', 'Woodwork', 'Metalwork', 'Electronics', 'Building Technology'],
      color: 'from-purple-50 to-purple-100',
    },
  ];

  const classStructure = [
    {
      level: 'Lower Secondary',
      classes: 'Form 1 – Form 3',
      description: 'Foundation years with broad-based curriculum across all subjects',
      focus: 'General Education & Exploration',
    },
    {
      level: 'Upper Secondary',
      classes: 'Form 4 – Form 5',
      description: 'Specialized studies in chosen departments with advanced subjects',
      focus: 'Department Specialization',
    },
    {
      level: 'Sixth Form',
      classes: 'Lower & Upper Sixth',
      description: 'Advanced level studies preparing for university entrance',
      focus: 'University Preparation',
    },
  ];

  const clubs = [
    { name: 'Debate Club', icon: '🎤', desc: 'Public speaking and argumentation skills' },
    { name: 'Science Club', icon: '🔬', desc: 'Research projects and scientific experiments' },
    { name: 'ICT Club', icon: '💻', desc: 'Programming and technology innovation' },
    { name: 'Sports Teams', icon: '⚽', desc: 'Football, Basketball, Tennis, Athletics' },
    { name: 'Model UN', icon: '🌍', desc: 'International diplomacy and leadership' },
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Secondary Section</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Excellence Through Specialized Education</p>
            </motion.div>
          </div>
        </section>

        {/* Class Structure Overview */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Cameroon Secondary Education System</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
              <p className="text-secondary mt-6 max-w-2xl mx-auto text-lg">
                Our secondary section follows Cameroon's education structure with comprehensive programs from Form 1 through Upper Sixth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classStructure.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary"
                >
                  <h3 className="text-2xl font-bold text-primary mb-2 font-serif">{item.level}</h3>
                  <p className="text-accent font-bold mb-4">{item.classes}</p>
                  <p className="text-secondary mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">Focus Area</p>
                    <p className="text-secondary font-semibold mt-1">{item.focus}</p>
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Academic Departments</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-br ${dept.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-2 border border-border/50`}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-serif">{dept.name}</h3>
                    <p className="text-secondary text-sm mb-4 leading-relaxed">{dept.description}</p>
                    <div className="space-y-2">
                      {dept.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-xs text-secondary">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
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
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-secondary"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">{program.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{program.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Clubs & Activities</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-6 rounded-lg hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/20"
                >
                  <div className="text-4xl mb-3">{club.icon}</div>
                  <h4 className="font-bold mb-2 text-lg">{club.name}</h4>
                  <p className="text-sm text-primary-foreground/90">{club.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Development */}
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
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
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
                  title: 'Community Service',
                  desc: 'Students engage in community projects developing social responsibility',
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
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif">{item.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Join Our Secondary Section</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Experience comprehensive education with specialized departments and world-class facilities.
              </p>
              <Link href="/admissions">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 font-semibold shadow-lg">
                  Apply Now
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
