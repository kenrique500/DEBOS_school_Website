import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Users, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Admissions Page - Academic Heritage Design
 * Features: Requirements, application process, fees, contact info
 */

export default function Admissions() {
  const requirements = [
    { class: 'Form 1 - Form 3', age: '12-15 years', test: 'Entrance Exam & Interview' },
    { class: 'Form 4 - Form 5', age: '15-17 years', test: 'Entrance Exam & Interview' },
    { class: 'Lower Sixth', age: '17-18 years', test: 'Entrance Exam & Interview' },
    { class: 'Upper Sixth', age: '18-19 years', test: 'Entrance Exam & Interview' },
  ];

  const steps = [
    {
      number: '1',
      title: 'Submit Application',
      description: 'Complete the online application form with required documents',
    },
    {
      number: '2',
      title: 'Entrance Assessment',
      description: 'Participate in entrance examination and aptitude assessment',
    },
    {
      number: '3',
      title: 'Interview',
      description: 'Meet with admissions team and school leadership',
    },
    {
      number: '4',
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment details',
    },
  ];

  const feesStructure = [
    { level: 'Lower Secondary (Form 1-3)', annual: 'XFA 450,000', term: 'XFA 150,000' },
    { level: 'Upper Secondary (Form 4-5)', annual: 'XFA 550,000', term: 'XFA 185,000' },
    { level: 'Sixth Form (Lower & Upper)', annual: 'XFA 650,000', term: 'XFA 220,000' },
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Admissions</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Join the DEBOS Family</p>
            </motion.div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Admission Requirements</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{req.class}</h3>
                  <p className="text-secondary text-sm mb-3">
                    <strong>Age:</strong> {req.age}
                  </p>
                  <p className="text-secondary text-sm">
                    <strong>Assessment:</strong> {req.test}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Application Process</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm h-full">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2 font-serif">{step.title}</h3>
                    <p className="text-sm text-primary-foreground/90 text-center">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Required Documents</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 font-serif">For New Students</h3>
                <ul className="space-y-3">
                  {[
                    'Birth Certificate',
                    'Previous School Report Card',
                    'Medical Report',
                    'Passport-size Photographs',
                    'Parent/Guardian ID',
                    'Proof of Residence',
                  ].map((doc, idx) => (
                    <li key={idx} className="flex gap-3 text-secondary">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
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
                <h3 className="text-2xl font-bold text-primary mb-6 font-serif">For Transfer Students</h3>
                <ul className="space-y-3">
                  {[
                    'Transfer Certificate',
                    'Latest Report Card',
                    'Character Certificate',
                    'Medical Report',
                    'Passport-size Photographs',
                    'Parent/Guardian ID',
                  ].map((doc, idx) => (
                    <li key={idx} className="flex gap-3 text-secondary">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* School Fees */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">School Fees Structure</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {feesStructure.map((fee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm text-center"
                >
                  <h3 className="text-lg font-bold mb-4 font-serif">{fee.level}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-primary-foreground/80 mb-1">Annual Fee</p>
                    <p className="text-3xl font-bold text-accent">{fee.annual}</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/80 mb-1">Per Term</p>
                    <p className="text-2xl font-bold">{fee.term}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm text-center"
            >
              <p className="text-sm text-primary-foreground/90">
                <strong>Note:</strong> Fees include tuition, meals, transportation, and access to all school facilities. Scholarships and financial aid are available for deserving students. Please contact the admissions office for details.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Download Forms */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Download Forms</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Admission Form', file: 'admission-form.pdf' },
                { name: 'Medical Form', file: 'medical-form.pdf' },
                { name: 'Parent Handbook', file: 'parent-handbook.pdf' },
              ].map((form, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-4 font-serif">{form.name}</h3>
                  <button className="flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2 rounded-lg font-semibold transition-colors mx-auto">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif">Questions? Contact Us</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Our admissions team is ready to help you with any questions about joining Elite Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold">
                    Contact Admissions
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 font-semibold"
                >
                  Schedule Campus Tour
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
