import { usePortfolio } from '../hooks'
import { Atom, BarChart3, Sigma, BrainCircuit, Network, MessageSquare, Sparkles, MessageCircle, Bot, ScanEye, ChartColumn, Infinity, Target } from 'lucide-react'

const logos: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Pandas & NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  SQL: 'https://cdn.simpleicons.org/mysql',
  'Power BI': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg',
  'R Programming': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'TensorFlow / PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Cloud / AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
}

const fallbackIcons: Record<string, React.ElementType> = {
  'Data Science': Atom,
  'Data Analysis': BarChart3,
  Statistics: Sigma,
  'Machine Learning': BrainCircuit,
  'Deep Learning': Network,
  'Natural Language Processing': MessageSquare,
  'Generative AI': Sparkles,
  'Large Language Models': MessageCircle,
  'AI Agents': Bot,
  'Computer Vision': ScanEye,
  'Data Visualization': ChartColumn,
  MLOps: Infinity,
  'Research & Problem Solving': Target,
}

export function Skills(){
  const {skills}=usePortfolio()
  const orderedSkills=[...skills].sort((a,b)=>Number(Boolean(logos[b]))-Number(Boolean(logos[a])))
  return <section id="skills"><div className="container"><div className="section-kicker">02 / Skills</div><h2 className="section-title">Tools I’m building with.</h2><div className="skills-grid">{orderedSkills.map((skill:string)=>{const logo=logos[skill]; const Icon=fallbackIcons[skill]; return <div className="skill" key={skill} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',gap:'18px',padding:'20px',boxSizing:'border-box'}}>{logo ? <img src={logo} alt={`${skill} logo`} className="skill-logo" style={{width:'clamp(72px,9vw,150px)',height:'clamp(72px,9vw,150px)',objectFit:'contain',alignSelf:'center'}} onError={(e)=>{e.currentTarget.style.display='none'}} /> : Icon ? <Icon aria-hidden="true" strokeWidth={1.8} style={{width:'38px',height:'38px',alignSelf:'flex-start'}} /> : null}<span className="skill-name" style={{fontSize:'1rem',lineHeight:1.35,whiteSpace:'normal'}}>{skill}</span></div>})}</div></div></section>
}
