import { ArrowUpRight, Database, ShieldCheck } from 'lucide-react'

const projects=[{
  title:'Aadhaar Intelligence Engine',
  category:'Privacy-Safe Data Science & AI',
  problem:'Large-scale Aadhaar data can contain complex demographic, biometric and regional patterns that are difficult to understand through basic reporting alone.',
  solution:'A privacy-safe analytics framework designed to turn aggregated Aadhaar data into actionable insights for anomaly detection, migration intelligence and regional planning without exposing personal identities.',
  stack:['Python','SQL','Pandas','NumPy','Scikit-learn','Data Visualization'],
  status:'Research & Build'
}]

export function Projects(){return <section id="projects"><div className="container"><div className="section-kicker">04 / Projects</div><h2 className="section-title">From problem to solution.</h2><p className="muted" style={{maxWidth:700,marginBottom:36}}>Selected work presented as concise case studies — what the problem was, how I approached it, and the technologies behind the solution.</p><div className="case-grid">{projects.map((p)=><article className="case-card" key={p.title}><div className="case-top"><div className="project-icon"><ShieldCheck size={27}/></div><span className="case-status">{p.status}</span></div><div className="case-category">{p.category}</div><h3>{p.title}</h3><div className="case-sections"><div><span>01 / Problem</span><p>{p.problem}</p></div><div><span>02 / Solution</span><p>{p.solution}</p></div></div><div className="case-bottom"><div className="stack">{p.stack.map(x=><span key={x}>{x}</span>)}</div><a className="case-link" href="#contact">Discuss project <ArrowUpRight size={16}/></a></div></article>)}</div></div></section>}
