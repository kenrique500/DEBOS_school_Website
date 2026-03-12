import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin } from 'lucide-react';

/**
 * Class Group Pictures Page - DEBOS Bilingual Secondary School
 * Features: Class photos from Form 1 to Upper Sixth with details
 */

interface ClassInfo {
  id: number;
  name: string;
  form: string;
  students: number;
  classTeacher: string;
  academicYear: string;
  image: string;
}

export default function ClassPictures() {
  const classes: ClassInfo[] = [
    {
      id: 1,
      name: 'Form 1 A',
      form: 'Form 1',
      students: 42,
      classTeacher: 'Mrs. Beatrice Nkwenti',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
    },
    {
      id: 2,
      name: 'Form 1 B',
      form: 'Form 1',
      students: 40,
      classTeacher: 'Mr. Victor Etchi',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp',
    },
    {
      id: 3,
      name: 'Form 2 A',
      form: 'Form 2',
      students: 38,
      classTeacher: 'Mr. Jean-Paul Nkomo',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp',
    },
    {
      id: 4,
      name: 'Form 2 B',
      form: 'Form 2',
      students: 39,
      classTeacher: 'Mme. Sylvie Tagne',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/campus-facilities-ZpsMkZA6aYPx5tSnNtvhoE.webp',
    },
    {
      id: 5,
      name: 'Form 3 A',
      form: 'Form 3',
      students: 35,
      classTeacher: 'Dr. Emmanuel Mbah',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp',
    },
    {
      id: 6,
      name: 'Form 3 B',
      form: 'Form 3',
      students: 36,
      classTeacher: 'Prof. Grace Asongwed',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
    },
    {
      id: 7,
      name: 'Form 4 A (Science)',
      form: 'Form 4',
      students: 28,
      classTeacher: 'Dr. Clement Fonjong',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp',
    },
    {
      id: 8,
      name: 'Form 4 B (Arts)',
      form: 'Form 4',
      students: 26,
      classTeacher: 'Mme. Rosine Nkongho',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/secondary-section-6RCzio49hCK2FCevhpDkm.webp',
    },
    {
      id: 9,
      name: 'Form 5 A (Science)',
      form: 'Form 5',
      students: 24,
      classTeacher: 'Mr. David Njie',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/campus-facilities-ZpsMkZA6aYPx5tSnNtvhoE.webp',
    },
    {
      id: 10,
      name: 'Form 5 B (Arts)',
      form: 'Form 5',
      students: 22,
      classTeacher: 'Mrs. Amara Suh',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/student-life-4x6Jos2AhGv24KwvdrDZQo.webp',
    },
    {
      id: 11,
      name: 'Upper Sixth A (Science)',
      form: 'Upper Sixth',
      students: 18,
      classTeacher: 'Mr. Alain Biyong',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/hero-campus-AWAg5rQ2Ux2HJcPsGYiFJ8.webp',
    },
    {
      id: 12,
      name: 'Upper Sixth B (Arts)',
      form: 'Upper Sixth',
      students: 16,
      classTeacher: 'Mrs. Chantal Mbonji',
      academicYear: '2023/2024',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663391510873/cmAGf5bAnJxojU7mZFk6qr/primary-section-TLfmY7eujkDsu3qSBhzdYC.webp',
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
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">Class Group Pictures</h1>
              <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl">Meet Our Students from Form 1 to Upper Sixth</p>
            </motion.div>
          </div>
        </section>

        {/* Classes by Form */}
        <section className="py-20 bg-background">
          <div className="container">
            {/* Form 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Form 1</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.filter(c => c.form === 'Form 1').map((classInfo, index) => (
                  <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Form 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Form 2</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.filter(c => c.form === 'Form 2').map((classInfo, index) => (
                  <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Form 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Form 3</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.filter(c => c.form === 'Form 3').map((classInfo, index) => (
                  <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Form 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Form 4</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.filter(c => c.form === 'Form 4').map((classInfo, index) => (
                  <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Form 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Form 5</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.filter(c => c.form === 'Form 5').map((classInfo, index) => (
                  <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Upper Sixth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Upper Sixth</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.filter(c => c.form === 'Upper Sixth').map((classInfo, index) => (
                  <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* School Statistics */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">School Statistics</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '12', label: 'Classes' },
                { number: '400+', label: 'Students' },
                { number: '35', label: 'Teachers' },
                { number: '2023/24', label: 'Current Year' },
              ].map((stat, index) => (
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
      </main>

      <Footer />
    </div>
  );
}

function ClassCard({ classInfo, index }: { classInfo: ClassInfo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Class Photo */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <img
          src={classInfo.image}
          alt={classInfo.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {classInfo.name}
        </div>
      </div>

      {/* Class Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4 font-serif">{classInfo.name}</h3>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm text-secondary">
              <strong>{classInfo.students}</strong> Students
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-secondary">
              <strong>Class Teacher:</strong> {classInfo.classTeacher}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm text-secondary">
              <strong>Academic Year:</strong> {classInfo.academicYear}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
