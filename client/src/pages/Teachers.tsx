import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

/**
 * Teachers Gallery Page - DEBOS Bilingual Secondary School
 * Features: Teacher profiles, qualifications, and experience
 */

interface Teacher {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  bio: string;
  specialization: string;
}

export default function Teachers() {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Mr. Jean-Paul Nkomo',
      subject: 'English Language',
      qualification: 'Master\'s in English Literature',
      experience: '15 years',
      bio: 'Head of English Department with expertise in literature and communication skills. Passionate about developing students\' critical thinking abilities.',
      specialization: 'Literature & Composition',
    },
    {
      id: 2,
      name: 'Mme. Sylvie Tagne',
      subject: 'French Language',
      qualification: 'Diploma in French Education',
      experience: '12 years',
      bio: 'Bilingual educator specializing in French language and Francophone culture. Encourages fluency through immersive learning.',
      specialization: 'French Linguistics',
    },
    {
      id: 3,
      name: 'Dr. Emmanuel Mbah',
      subject: 'Mathematics',
      qualification: 'PhD in Mathematics Education',
      experience: '18 years',
      bio: 'Mathematics department head with focus on problem-solving and analytical thinking. Makes complex concepts accessible.',
      specialization: 'Advanced Mathematics',
    },
    {
      id: 4,
      name: 'Prof. Grace Asongwed',
      subject: 'Physics',
      qualification: 'Master\'s in Physics',
      experience: '16 years',
      bio: 'Experimental physicist dedicated to hands-on learning. Leads the school\'s science research initiatives.',
      specialization: 'Experimental Physics',
    },
    {
      id: 5,
      name: 'Dr. Clement Fonjong',
      subject: 'Chemistry',
      qualification: 'PhD in Chemistry',
      experience: '14 years',
      bio: 'Chemistry specialist with research background. Emphasizes practical laboratory skills and safety.',
      specialization: 'Organic Chemistry',
    },
    {
      id: 6,
      name: 'Mrs. Beatrice Nkwenti',
      subject: 'Biology',
      qualification: 'Master\'s in Biological Sciences',
      experience: '13 years',
      bio: 'Biology educator passionate about environmental conservation and life sciences education.',
      specialization: 'Ecology & Conservation',
    },
    {
      id: 7,
      name: 'Mr. Victor Etchi',
      subject: 'History',
      qualification: 'Diploma in History Education',
      experience: '11 years',
      bio: 'History teacher focused on critical analysis of historical events and their contemporary relevance.',
      specialization: 'African History',
    },
    {
      id: 8,
      name: 'Mme. Rosine Nkongho',
      subject: 'Geography',
      qualification: 'Master\'s in Geography',
      experience: '10 years',
      bio: 'Geography educator with expertise in human and physical geography. Uses GIS technology in teaching.',
      specialization: 'Geospatial Analysis',
    },
    {
      id: 9,
      name: 'Mr. David Njie',
      subject: 'Economics',
      qualification: 'Bachelor\'s in Economics',
      experience: '9 years',
      bio: 'Economics teacher making real-world connections to economic principles and market dynamics.',
      specialization: 'Microeconomics',
    },
    {
      id: 10,
      name: 'Mrs. Amara Suh',
      subject: 'Physical Education',
      qualification: 'Diploma in Sports Science',
      experience: '12 years',
      bio: 'PE instructor promoting holistic health and athletic development through diverse sports programs.',
      specialization: 'Sports Management',
    },
    {
      id: 11,
      name: 'Mr. Alain Biyong',
      subject: 'Information Technology',
      qualification: 'Bachelor\'s in Computer Science',
      experience: '8 years',
      bio: 'IT specialist teaching coding, digital literacy, and technology applications for modern learning.',
      specialization: 'Web Development',
    },
    {
      id: 12,
      name: 'Mrs. Chantal Mbonji',
      subject: 'Art & Design',
      qualification: 'Master\'s in Fine Arts',
      experience: '11 years',
      bio: 'Art educator fostering creativity and cultural expression through diverse artistic mediums.',
      specialization: 'Contemporary Art',
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Our Teachers</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Dedicated Educators Shaping Future Leaders</p>
            </motion.div>
          </div>
        </section>

        {/* Teachers Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Meet Our Faculty</h2>
              <p className="text-secondary max-w-2xl mx-auto">Our experienced and qualified teachers are committed to academic excellence and student development.</p>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-secondary"
                >
                  {/* Teacher Avatar */}
                  <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="text-5xl">👨‍🏫</div>
                  </div>

                  {/* Teacher Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1 font-serif">{teacher.name}</h3>
                    <p className="text-accent font-semibold mb-4">{teacher.subject}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-secondary">Qualification</p>
                          <p className="text-sm text-foreground">{teacher.qualification}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-secondary">Specialization</p>
                          <p className="text-sm text-foreground">{teacher.specialization}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-secondary">Experience</p>
                          <p className="text-sm text-foreground">{teacher.experience}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-secondary leading-relaxed">{teacher.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Department Heads</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { dept: 'English Department', head: 'Mr. Jean-Paul Nkomo' },
                { dept: 'Mathematics Department', head: 'Dr. Emmanuel Mbah' },
                { dept: 'Science Department', head: 'Prof. Grace Asongwed' },
                { dept: 'Humanities Department', head: 'Mr. Victor Etchi' },
                { dept: 'Languages Department', head: 'Mme. Sylvie Tagne' },
                { dept: 'Sports & Arts', head: 'Mr. David Njie' },
              ].map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors text-center"
                >
                  <h3 className="text-lg font-bold mb-2 font-serif">{dept.dept}</h3>
                  <p className="text-primary-foreground/90">{dept.head}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif text-primary">Our Teaching Philosophy</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Student-Centered Learning',
                  description: 'We prioritize individual student needs and learning styles, creating personalized educational experiences that foster growth and confidence.',
                },
                {
                  title: 'Excellence & Innovation',
                  description: 'Our teachers continuously update their methods with modern pedagogies and technology to ensure relevant, engaging, and effective instruction.',
                },
                {
                  title: 'Holistic Development',
                  description: 'Beyond academics, we nurture critical thinking, creativity, character, and leadership skills essential for success in a global society.',
                },
                {
                  title: 'Collaborative Learning',
                  description: 'We foster teamwork and peer learning, encouraging students to work together, share ideas, and learn from one another.',
                },
              ].map((philosophy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold text-primary mb-4 font-serif">{philosophy.title}</h3>
                  <p className="text-secondary leading-relaxed">{philosophy.description}</p>
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
