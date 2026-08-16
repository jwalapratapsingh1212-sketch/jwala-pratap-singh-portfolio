import { usePortfolio } from '../hooks'
export function Skills(){const {skills}=usePortfolio();return <section id="skills"><div className="container"><div className="section-kicker">02 / Skills</div><h2 className="section-title">Tools I’m building with.</h2><div className="skills-grid">{skills.map((skill:string)=><div className="skill" key={skill}>{skill}</div>)}</div></div></section>}
