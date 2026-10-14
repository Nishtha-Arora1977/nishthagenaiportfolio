import { Users, Sprout, Brain, Eye, ShoppingCart, Film, BarChart3, Store } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    icon: Users,
    title: 'AI Candidate Ranking System',
    type: 'Personal Project',
    description: 'Built an independent AI-based candidate-screening pipeline — resume parsing, embeddings, semantic search, and AI-generated summaries — with FastAPI, LLMs, and PostgreSQL backend services. Supabase authentication and database services power the workflow.',
    year: '2026',
    tags: ['FastAPI', 'Next.js', 'Sentence Transformers', 'LLM', 'Supabase', 'RAG'],
    gradient: 'from-fuchsia-300 to-fuchsia-300',
    link: 'https://ai-candidate-ranking-system-psi.vercel.app/'
  },
  {
    icon: Sprout,
    title: 'AI for Agriculture',
    type: 'Major Project',
    description: 'Developed an AI-powered farmer assistant combining crop disease detection, a multilingual chatbot, satellite imagery analysis, weather forecasting, and market price prediction.',
    year: '2025',
    tags: ['AI/ML', 'Multilingual Chatbot', 'Computer Vision'],
    gradient: 'from-fuchsia-300 to-fuchsia-300',
    link: 'https://farmer-centric-ai-dashboard-en9g8i3rzvn4qxepaenhfu.streamlit.app/'
  },
  {
    icon: Brain,
    title: 'Autonomous Driving using Deep Q-Learning',
    type: 'ICAIA Conference Research Paper',
    description: 'Studied Deep Q-Learning and reinforcement learning for autonomous driving; analyzed attack and defense mechanisms in RL-based systems.',
    year: '2023',
    tags: ['Deep Learning', 'Reinforcement Learning', 'Research'],
    gradient: 'from-fuchsia-300 to-fuchsia-300'
  },
  {
    icon: Store,
    title: 'Aakaars – 3D-Printed Goods Store',
    type: 'Freelance Client Project',
    description: 'Delivered a client e-commerce website with a custom Node.js backend on Vercel serverless, Supabase Postgres, session auth, Razorpay payments with HMAC verification, Resend emails, and an owner admin panel; vanilla JavaScript frontend.',
    year: '2025',
    tags: ['Node.js', 'Supabase', 'Razorpay', 'Vercel', 'Vanilla JS'],
    gradient: 'from-fuchsia-300 to-fuchsia-300',
    link: 'https://aakaars.in'
  },
  {
    icon: Eye,
    title: 'Virtual Keyboard – Hand Gesture (Web)',
    type: 'Computer Vision Project',
    description: 'Built a gesture-based virtual keyboard with real-time in-browser hand tracking; touch a key with your index finger to type — fully in-browser with no server required.',
    year: '2026',
    tags: ['Computer Vision', 'Hand Tracking', 'JavaScript'],
    gradient: 'from-fuchsia-300 to-fuchsia-300',
    link: 'https://virtualkeyboard-rho.vercel.app/'
  },
  {
    icon: Film,
    title: 'MovieSphere & E-commerce Dashboard',
    type: 'Data Analytics Project',
    description: 'Built a Netflix-style recommendation engine using collaborative and content-based filtering, and an interactive dashboard tracking revenue, profit, and regional sales trends.',
    year: '2025',
    tags: ['Python', 'Scikit-learn', 'Recommendation Engine', 'Power BI'],
    gradient: 'from-fuchsia-300 to-fuchsia-300',
    link: 'https://moviesphere-pi.vercel.app/'
  },
  {
    icon: BarChart3,
    title: 'Interactive Netflix Dashboard',
    type: 'Tableau Data Analytics Project',
    description: 'Designed an interactive Tableau dashboard to analyze Netflix movies and TV shows. Visualized genre distribution, ratings, release trends, and country-wise content insights. Used charts, maps, and KPI cards to present data-driven storytelling effectively.',
    year: '2024',
    tags: ['Tableau', 'Data Visualization', 'Analytics'],
    gradient: 'from-fuchsia-300 to-fuchsia-300'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-carbon-900 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-200/80 font-mono">{'/* '}Showcasing my technical expertise and creativity{' */'}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => project.link && window.open(project.link, '_blank')}
                className={`bg-carbon-850/50 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl hover:shadow-fuchsia-300/20 transition-all border border-fuchsia-300/20 group overflow-hidden relative hover:border-fuchsia-300/40 ${project.link ? 'cursor-pointer' : ''}`}
              >
                {/* Animated gradient overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-fuchsia-300/20 to-fuchsia-300/20 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Binary code decoration */}
                <div className="absolute top-4 right-4 text-fuchsia-300/10 font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                  01010011
                </div>

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-300/30`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-1">{project.title}</h3>
                    <span className="text-sm text-fuchsia-200/70 font-mono">{project.type}</span>
                  </div>
                </div>
                <p className="text-slate-100/80 mb-4 leading-relaxed relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="px-3 py-1.5 bg-carbon-800/50 backdrop-blur-sm border border-fuchsia-300/30 rounded-full text-sm text-slate-100 shadow-md hover:shadow-fuchsia-300/50 transition-all cursor-default hover:border-fuchsia-300/50 font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
