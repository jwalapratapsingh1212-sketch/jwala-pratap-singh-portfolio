import { useRef, useState } from 'react'
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
  'Data Science': Atom,'Data Analysis': BarChart3,Statistics: Sigma,'Machine Learning': BrainCircuit,'Deep Learning': Network,'Natural Language Processing': MessageSquare,'Generative AI': Sparkles,'Large Language Models': MessageCircle,'AI Agents': Bot,'Computer Vision': ScanEye,'Data Visualization': ChartColumn,MLOps: Infinity,'Research & Problem Solving': Target,
}

const details: Record<string,string> = {
  Python:'Data processing • Machine Learning • Automation', 'Pandas & NumPy':'Data cleaning • EDA • Numerical computing', SQL:'Data querying • Analysis • Database workflows', 'Power BI':'Dashboards • KPIs • Business intelligence', 'R Programming':'Statistics • Data analysis • Visualization', 'Scikit-learn':'Classical ML • Model training • Evaluation', 'TensorFlow / PyTorch':'Deep learning • Neural networks • Model development', FastAPI:'ML APIs • Backend services • Model deployment', 'Git & GitHub':'Version control • Collaboration • Portfolio', Docker:'Containerization • Reproducible deployments', 'Cloud / AWS':'Cloud infrastructure • Deployment • Scalable systems', 'Data Science':'Data analysis • Statistics • Machine Learning', 'Data Analysis':'EDA • Insights • Decision support', Statistics:'Statistical analysis • Inference • Modeling', 'Machine Learning':'Prediction • Classification • Regression • Optimization', 'Deep Learning':'Neural networks • Representation learning', 'Natural Language Processing':'Text analysis • NLP pipelines • Language models', 'Generative AI':'LLMs • RAG • AI applications', 'Large Language Models':'Prompting • RAG • LLM applications', 'AI Agents':'Tool use • Planning • Autonomous workflows', 'Computer Vision':'Image understanding • Vision models', 'Data Visualization':'Charts • Storytelling • Interactive dashboards', MLOps:'Model serving • CI/CD • Production workflows', 'Research & Problem Solving':'Experimentation • Analysis • Technical research'
}

export function Skills(){
  const {skills}=usePortfolio(); const [active,setActive]=useState(''); const timer=useRef<number | undefined>(undefined)
  const orderedSkills=[...skills].sort((a,b)=>Number(Boolean(logos[b]))-Number(Boolean(logos[a])))
  const show=(skill:string)=>{setActive(skill); if(timer.current) window.clearTimeout(timer.current); timer.current=window.setTimeout(()=>setActive(''),1800)}
  return <section id="skills"><div className="container"><div className="section-kicker">02 / Skills</div><h2 className="section-title">Tools I’m building with.</h2><div className="skills-grid">{orderedSkills.map((skill:string)=>{const logo=logos[skill]; const Icon=fallbackIcons[skill]; return <button type="button" className={`skill skill-interactive${active===skill?' is-active':''}`} key={skill} onClick={()=>show(skill)} onTouchStart={()=>show(skill)}>{logo ? <img src={logo} alt={`${skill} logo`} className="skill-logo" style={{width:'clamp(72px,9vw,150px)',height:'clamp(72px,9vw,150px)',objectFit:'contain',alignSelf:'center'}} onError={(e)=>{e.currentTarget.style.display='none'}} /> : Icon ? <Icon aria-hidden="true" strokeWidth={1.8} style={{width:'38px',height:'38px',alignSelf:'flex-start'}} /> : null}<span className="skill-name" style={{fontSize:'1rem',lineHeight:1.35,whiteSpace:'normal'}}>{skill}</span>{active===skill&&<span className="skill-pop">{details[skill]||'Technology • Development • Practical applications'}</span>}</button>})}</div></div></section>
}
