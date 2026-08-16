import { usePortfolio } from '../hooks'

const logos: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Pandas & NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  'Power BI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powerbi/powerbi-original.svg',
  'R Programming': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'TensorFlow / PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Cloud / AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
}

const fallbackIcons: Record<string, string> = {
  'Data Science': 'DS',
  'Data Analysis': 'DA',
  Statistics: 'Σ',
  'Machine Learning': 'ML',
  'Deep Learning': 'DL',
  'Natural Language Processing': 'NLP',
  'Generative AI': 'AI',
  'Large Language Models': 'LLM',
  'AI Agents': 'AG',
  'Computer Vision': 'CV',
  'Data Visualization': 'DV',
  MLOps: 'MO',
  'Research & Problem Solving': 'R',
}

export function Skills(){
  const {skills}=usePortfolio()
  return <section id="skills"><div className="container"><div className="section-kicker">02 / Skills</div><h2 className="section-title">Tools I’m building with.</h2><div className="skills-grid">{skills.map((skill:string)=>{const logo=logos[skill]; return <div className="skill" key={skill}>{logo ? <img src={logo} alt={`${skill} logo`} className="skill-logo" /> : <span className="skill-fallback">{fallbackIcons[skill] || '✦'}</span>}<span>{skill}</span></div>})}</div></div></section>
}
