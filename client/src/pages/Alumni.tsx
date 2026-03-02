import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Award, Globe, Briefcase, GraduationCap } from 'lucide-react';

/**
 * Alumni Page - Academic Heritage Design
 * Features: Alumni success stories, achievements, career paths
 */

interface AlumniStory {
  id: number;
  name: string;
  graduationYear: number;
  currentRole: string;
  company: string;
  field: string;
  story: string;
  achievement: string;
  icon: React.ReactNode;
}

export default function Alumni() {
  const alumniStories: AlumniStory[] = [
    {
      id: 1,
      name: 'Dr. Adekunle Adeyemi',
      graduationYear: 2010,
      currentRole: 'Cardiac Surgeon',
      company: 'Lagos University Teaching Hospital',
      field: 'Medicine',
      story: 'After graduating from Elite Academy, Adekunle pursued medicine at the University of Lagos and specialized in cardiothoracic surgery. He now leads a team of surgeons and has performed over 500 successful cardiac procedures.',
      achievement: 'Published 15+ research papers in international journals',
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 2,
      name: 'Chioma Okonkwo',
      graduationYear: 2012,
      currentRole: 'Tech Entrepreneur',
      company: 'Founder, TechVision Africa',
      field: 'Technology',
      story: 'Chioma founded TechVision Africa, a software development company that has created innovative solutions for African businesses. Her company now employs 50+ professionals across three countries.',
      achievement: 'Recognized as one of Africa\'s Top 100 Young Entrepreneurs',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      id: 3,
      name: 'Prof. Emeka Obi',
      graduationYear: 2008,
      currentRole: 'University Professor',
      company: 'University of Nigeria, Nsukka',
      field: 'Education',
      story: 'Emeka earned his PhD in Physics from Cambridge University and now leads the Physics Department at UNN. He has mentored hundreds of students and contributed significantly to scientific research.',
      achievement: 'Awarded UNESCO Prize for Science Education',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      id: 4,
      name: 'Tunde Afolabi',
      graduationYear: 2011,
      currentRole: 'Investment Banker',
      company: 'Goldman Sachs, London',
      field: 'Finance',
      story: 'Tunde studied Economics at Oxford University and joined Goldman Sachs as an analyst. He now leads the African Investment Division and manages portfolios worth over $2 billion.',
      achievement: 'Promoted to Managing Director at age 32',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: 5,
      name: 'Zainab Hassan',
      graduationYear: 2013,
      currentRole: 'Human Rights Lawyer',
      company: 'Amnesty International',
      field: 'Law',
      story: 'Zainab studied law at the University of Ibadan and specialized in human rights. She now works with Amnesty International, advocating for justice and protecting vulnerable populations across Africa.',
      achievement: 'Won the African Human Rights Lawyer Award',
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 6,
      name: 'Kunle Adebayo',
      graduationYear: 2009,
      currentRole: 'Environmental Engineer',
      company: 'UN Environment Programme',
      field: 'Environment',
      story: 'Kunle earned his Master\'s in Environmental Engineering from MIT and now works with UNEP on climate change initiatives. He has led projects impacting over 1 million people.',
      achievement: 'Recognized as UN Young Champion of the Earth',
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const stats = [
    { number: '5,000+', label: 'Alumni Worldwide' },
    { number: '95%', label: 'University Admission Rate' },
    { number: '50+', label: 'Countries Represented' },
    { number: '100+', label: 'Industry Leaders' },
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Our Alumni</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Leaders Making Global Impact</p>
            </motion.div>
          </div>
        </section>

        {/* Alumni Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-serif">{stat.number}</div>
                  <p className="text-primary-foreground/90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Alumni Success Stories</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="space-y-12">
              {alumniStories.map((alumnus, index) => (
                <motion.div
                  key={alumnus.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Image/Icon */}
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <div className="text-6xl">👤</div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                        {alumnus.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary font-serif">{alumnus.name}</h3>
                        <p className="text-accent text-sm">Class of {alumnus.graduationYear}</p>
                      </div>
                    </div>

                    <div className="mb-6 space-y-2">
                      <p className="text-secondary">
                        <strong>Current Role:</strong> {alumnus.currentRole}
                      </p>
                      <p className="text-secondary">
                        <strong>Organization:</strong> {alumnus.company}
                      </p>
                      <p className="text-secondary">
                        <strong>Field:</strong> {alumnus.field}
                      </p>
                    </div>

                    <p className="text-secondary leading-relaxed mb-4">{alumnus.story}</p>

                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                      <p className="text-secondary text-sm">
                        <strong>Key Achievement:</strong> {alumnus.achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Network */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Global Alumni Network</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { region: 'West Africa', count: '2,500+', cities: 'Lagos, Accra, Dakar' },
                { region: 'East Africa', count: '800+', cities: 'Nairobi, Dar es Salaam' },
                { region: 'Europe', count: '1,200+', cities: 'London, Paris, Berlin' },
                { region: 'Americas', count: '500+', cities: 'New York, Toronto' },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm text-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 font-serif">{region.region}</h3>
                  <p className="text-3xl font-bold text-accent mb-2">{region.count}</p>
                  <p className="text-sm text-primary-foreground/80">{region.cities}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Engagement */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Alumni Engagement</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Mentorship Program',
                  description: 'Alumni mentor current students, sharing career insights and guidance for professional development.',
                },
                {
                  title: 'Annual Reunion',
                  description: 'Celebrate bonds with fellow alumni at our annual reunion featuring networking, sports, and cultural events.',
                },
                {
                  title: 'Scholarship Fund',
                  description: 'Alumni contribute to scholarships supporting deserving students in pursuing their Elite Academy education.',
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 font-serif">{program.title}</h3>
                  <p className="text-secondary text-sm">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Alumni */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif">Join the Elite Academy Alumni Network</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Stay connected with your alma mater and fellow alumni. Together, we continue to make a global impact.
              </p>
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Register as Alumni
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
