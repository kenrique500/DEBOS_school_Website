import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * Contact Page - Academic Heritage Design
 * Features: Contact form, office info, location map, contact details
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+237 (0) 123 456 789', '+237 (0) 987 654 321'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['admissions@debosbilingual.cm', 'info@debosbilingual.cm'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Kombe, Kotto Road Benabocko', 'Mongo Division, Cameroon'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 7:30 AM - 4:30 PM', 'Saturday: 8:00 AM - 1:00 PM'],
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">We're Here to Help and Answer Your Questions</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 font-serif">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-secondary text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 font-serif">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="+234..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academics</option>
                      <option value="facilities">Facilities</option>
                      <option value="events">Events & Activities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Map & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 font-serif">Visit Our Campus</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    We welcome prospective students and parents to visit our beautiful campus. Our admissions team is available to give guided tours and answer all your questions about DEBOS Bilingual Secondary School.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Campus Location</p>
                      <p className="text-primary-foreground/80 text-sm">Kombe, Kotto Road Benabocko, Mongo Division, Cameroon</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Visiting Hours</p>
                      <p className="text-primary-foreground/80 text-sm">Monday - Friday: 7:30 AM - 4:30 PM</p>
                      <p className="text-primary-foreground/80 text-sm">Saturday: 8:00 AM - 1:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Tour Booking</p>
                      <p className="text-primary-foreground/80 text-sm">Please call or email to schedule a campus tour</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 font-serif">Quick Links</h3>
                  <ul className="space-y-2">
                    {[
                      'Admissions Portal',
                      'Download Prospectus',
                      'Schedule Campus Tour',
                      'Apply Online',
                      'FAQ',
                    ].map((link, idx) => (
                      <li key={idx}>
                        <button className="text-accent hover:text-accent-foreground transition-colors flex items-center gap-2">
                          <span>→</span>
                          <span>{link}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg h-96"
            >
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.8376688888888!2d9.57031507854174!3d4.37222424333598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610c8c8c8c8c8d%3A0x1234567890abcdef!2sDEBOS%20Bilingual%20Secondary%20School!5e0!3m2!1sen!2scm!4v1234567890"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
