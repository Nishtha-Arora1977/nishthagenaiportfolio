import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    title: 'Gen AI Developer Intern',
    company: 'TantranZm Technologies Pvt. Ltd.',
    period: 'June 2026 - Present',
    duration: 'Present',
    points: [
      { text: 'Developing Work360, an AI-powered recruitment platform, with backend services designed around scalable, production-grade API workflows using Python and FastAPI', highlight: 'Work360' },
      { text: 'Designed and shipped REST APIs powering authentication, database workflows and core recruitment logic, integrated directly into production on PostgreSQL and Supabase', highlight: 'REST APIs' },
      { text: 'Owned the candidate-ranking pipeline end-to-end: resume parsing, embeddings generation, vector-based semantic search and LLM-based summarization, integrated via RAG', highlight: 'candidate-ranking pipeline' },
      { text: 'Collaborating with frontend and backend teams using Git and Agile practices to ship AI-powered features iteratively into production', highlight: 'Agile' }
    ]
  },
  {
    title: 'Data Analytics Intern',
    company: 'CODTECH IT SOLUTION',
    period: 'March 2026 - June 2026',
    duration: '3 Months',
    points: [
      { text: 'Completed an 8-week virtual internship in Data Analytics and Visualization using Python, SQL and Excel', highlight: '8-week' },
      { text: 'Worked across the full analytics workflow — data cleaning, preprocessing and exploratory analysis — to prepare raw datasets for reporting', highlight: 'exploratory analysis' },
      { text: 'Built end-to-end analytics dashboards — from raw data cleaning through visualization — used to surface business insights for stakeholders', highlight: 'dashboards' }
    ]
  },
  {
    title: 'Data Analytics & Machine Learning Intern',
    company: 'Infosys Springboard Learning',
    period: 'July 2025 - December 2025',
    duration: '6 Months',
    points: [
      { text: 'Implemented Decision Tree models achieving 90% accuracy for classification tasks', highlight: '90% accuracy' },
      { text: 'Analyzed datasets containing 10,000+ records using Python (Pandas, NumPy) and SQL', highlight: '10,000+ records' },
      { text: 'Built 3+ Power BI dashboards for KPI tracking and performance monitoring', highlight: '3+ Power BI dashboards' },
      { text: 'Delivered actionable insights to support data-driven business decisions', highlight: '' }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-carbon-950 relative overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-300/5 via-fuchsia-300/5 to-fuchsia-300/5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-200/80 font-mono">{'// '}Professional journey and achievements</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="bg-carbon-850/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-fuchsia-300/20 transition-all border border-fuchsia-300/30 relative overflow-hidden group"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fuchsia-300/20 via-fuchsia-300/20 to-fuchsia-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-300 via-fuchsia-300 to-fuchsia-300 flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-300/50"
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-200 mb-3">
                      <Building2 className="w-5 h-5 text-fuchsia-300" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 text-fuchsia-200/80 bg-carbon-800/50 px-3 py-1.5 rounded-full border border-fuchsia-300/20">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>
                      <span className="px-4 py-1.5 bg-gradient-to-r from-fuchsia-300/20 to-fuchsia-300/20 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-100 border border-fuchsia-300/30 shadow-sm shadow-fuchsia-300/30">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-slate-100/90">
                {exp.points.map((point, pointIndex) => {
                  const colors = ['from-fuchsia-300 to-fuchsia-300', 'from-fuchsia-300 to-fuchsia-200', 'from-fuchsia-200 to-fuchsia-300', 'from-fuchsia-300 to-fuchsia-300'];
                  const hoverColors = ['hover:bg-fuchsia-300/10 hover:border-fuchsia-300/30', 'hover:bg-fuchsia-300/10 hover:border-fuchsia-300/30', 'hover:bg-fuchsia-300/10 hover:border-fuchsia-300/30', 'hover:bg-fuchsia-300/10 hover:border-fuchsia-300/30'];
                  const colorIdx = pointIndex % colors.length;
                  return (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pointIndex * 0.1, duration: 0.4 }}
                      whileHover={{ x: 10 }}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors border border-transparent ${hoverColors[colorIdx]}`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${colors[colorIdx]} mt-2 flex-shrink-0 shadow-sm`}></span>
                      <span>
                        {point.highlight ? (
                          <>
                            {point.text.split(point.highlight)[0]}
                            <span className="font-bold text-fuchsia-300">{point.highlight}</span>
                            {point.text.split(point.highlight)[1]}
                          </>
                        ) : (
                          point.text
                        )}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
