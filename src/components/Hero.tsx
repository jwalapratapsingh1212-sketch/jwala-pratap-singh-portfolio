import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { usePortfolio } from '../hooks'

// Avatar is stored directly in the Vite public folder.
// encodeURI preserves the filename while safely encoding spaces for the deployed URL.
const AVATAR_URL = encodeURI('/WhatsApp Image 2026-08-16 at 8.08.09 PM.jpeg')

export function Hero(){
  const {profile}=usePortfolio()
  const avatarRef=useRef<HTMLImageElement>(null)

  const handleMouseMove=(event:MouseEvent<HTMLDivElement>)=>{
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
