import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

/**
 * News & Events Page - Academic Heritage Design
 * Features: Blog-style articles, event highlights, news stories
 */

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
}

export default function News() {
  const articles: NewsArticle[] = [
    {
      id: 1,
      title: 'Annual Cultural Day Celebrates Global Diversity',
      date: 'March 15, 2026',
      author: 'Mrs. Sarah Johnson',
      category: 'Events',
      excerpt: 'Elite Academy hosted its vibrant annual cultural day, showcasing the rich diversity of our student body through performances, food, and art from around the world.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp',
    },
    {
      id: 2,
      title: 'Inter-House Sports Championship Concludes with Thrilling Matches',
      date: 'March 10, 2026',
      author: 'Mr. David Chen',
      category: 'Sports',
      excerpt: 'The annual inter-house sports championship came to a spectacular conclusion with intense competitions across multiple disciplines, showcasing athletic excellence and sportsmanship.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/campus-facilities-ZpsMkZA6aYPx5tSnNtvhoE.webp',
    },
    {
      id: 3,
      title: 'Prize Giving Day Honors Academic and Co-Curricular Excellence',
      date: 'March 5, 2026',
      author: 'Dr. Margaret Richardson',
      category: 'Awards',
      excerpt: 'The prestigious Prize Giving Day ceremony recognized outstanding achievements in academics, sports, arts, and character development, celebrating the diverse talents of our students.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
    },
    {
      id: 4,
      title: 'Debate Team Wins Regional Championship',
      date: 'February 28, 2026',
      author: 'Mr. James Okafor',
      category: 'Achievements',
      excerpt: 'Our talented debate team brought home the regional championship trophy after impressive performances against schools from across the region.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp',
    },
    {
      id: 5,
      title: 'New Science Laboratory Officially Opened',
      date: 'February 20, 2026',
      author: 'Ms. Emily Watson',
      category: 'Facilities',
      excerpt: 'Elite Academy unveiled its state-of-the-art science laboratory, equipped with cutting-edge equipment to enhance hands-on learning and research opportunities for students.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp',
    },
    {
      id: 6,
      title: 'Alumni Success Stories: From Elite Academy to Global Impact',
      date: 'February 10, 2026',
      author: 'Alumni Relations',
      category: 'Alumni',
      excerpt: 'We celebrate our accomplished alumni who are making significant contributions in various fields including medicine, engineering, business, and public service worldwide.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
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
            <div className="absolute inset-0 bg-primary/70" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">News & Events</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Stay Updated with Latest Happenings at Elite Academy</p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {articles[0].category}
                </div>
                <h2 className="text-4xl font-bold text-primary mb-4 font-serif">{articles[0].title}</h2>
                <div className="flex gap-6 mb-6 text-secondary text-sm">
                  <div className="flex gap-2 items-center">
                    <Calendar className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                </div>
                <p className="text-secondary leading-relaxed mb-6">{articles[0].excerpt}</p>
                <button className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* All Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Latest News</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-3 font-serif line-clamp-2">{article.title}</h3>
                    <div className="flex gap-4 mb-4 text-secondary text-xs">
                      <div className="flex gap-1 items-center">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <p className="text-secondary text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <button className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Upcoming Events</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="space-y-6">
              {[
                { date: 'April 5, 2026', event: 'Science Exhibition', time: '10:00 AM - 4:00 PM' },
                { date: 'April 15, 2026', event: 'Inter-School Debate Competition', time: '9:00 AM - 5:00 PM' },
                { date: 'May 1, 2026', event: 'Annual Concert', time: '6:00 PM - 9:00 PM' },
                { date: 'May 20, 2026', event: 'Graduation Ceremony', time: '10:00 AM - 1:00 PM' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 bg-primary-foreground/10 p-6 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-accent font-semibold text-sm">{item.date}</p>
                    <h3 className="text-2xl font-bold font-serif">{item.event}</h3>
                    <p className="text-primary-foreground/80 text-sm">{item.time}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0" />
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
