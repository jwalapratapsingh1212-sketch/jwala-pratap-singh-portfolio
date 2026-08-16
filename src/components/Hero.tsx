import { usePortfolio } from '../hooks'
import { useRef } from 'react'

const AVATAR_URL = 'https://github.com/jwalapratapsingh1212-sketch/jwala-pratap-singh-portfolio/raw/refs/heads/main/public/avatar.webp'

export function Hero(){
  const {profile}=usePortfolio()
  const avatarRef=useRef<HTMLImageElement>(null)

  const handleMouseMove=(event: React.MouseEvent<HTMLDivElement>)=>{
    const rect=event.currentTarget.getBoundingClientRect()
    const x=(event.clientX-rect.left)/rect.width-.5
    const y=(event.clientY-rect.top)/rect.height-.5
    if(avatarRef.current){
      avatarRef.current.style.setProperty('--avatar-x',`${x*10}px`)
      avatarRef.current.style.setProperty('--avatar-y',`${y*8}px`)
      avatarRef.current.style.setProperty('--avatar-rx',`${-y*4}deg`)
      avatarRef.current.style.setProperty('--avatar-ry',`${x*5}deg`)
    }
  }

  const handleMouseLeave=()=>{
    if(avatarRef.current){
      avatarRef.current.style.setProperty('--avatar-x','0px')
      avatarRef.current.style.setProperty('--avatar-y','0px')
      avatarRef.current.style.setProperty('--avatar-rx','0deg')
      avatarRef.current.style.setProperty('--avatar-ry','0deg')
    }
  }

  return <section id="home" className="hero"><div className="container hero-grid"><div className="reveal"><div className="eyebrow">{profile.specialization}</div><h1>Hi, I’m <span className="gradient">Jwala.</span></h1><p>{profile.tagline} I’m a {profile.role} from {profile.location}, exploring AI, machine learning and intelligent systems.</p><div className="actions"><a className="btn primary" href="#projects">Explore Work</a><a className="btn" href={`mailto:${profile.social.email}`}>Let’s Connect</a></div></div><div className="avatar-wrap" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><img ref={avatarRef} className="avatar" src={AVATAR_URL} alt="3D portrait of Jwala Pratap Singh" /></div></div></section>
}
