import { usePortfolio } from '../hooks'

const AVATAR_URL = 'https://github.com/jwalapratapsingh1212-sketch/jwala-pratap-singh-portfolio/raw/refs/heads/main/public/avatar.webp'

export function Hero(){
  const {profile}=usePortfolio()
  return <section id="home" className="hero"><div className="container hero-grid"><div className="reveal"><div className="eyebrow">{profile.specialization}</div><h1>Hi, I’m <span className="gradient">Jwala.</span></h1><p>{profile.tagline} I’m a {profile.role} from {profile.location}, exploring AI, machine learning and intelligent systems.</p><div className="actions"><a className="btn primary" href="#projects">Explore Work</a><a className="btn" href={`mailto:${profile.social.email}`}>Let’s Connect</a></div></div><div className="avatar-wrap"><div className="avatar-ring"/><img className="avatar" src={AVATAR_URL} alt="3D portrait of Jwala Pratap Singh" /></div></div></section>
}