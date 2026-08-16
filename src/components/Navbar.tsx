import { useState } from 'react'

const links=[['About','#about'],['Skills','#skills'],['Services','#services'],['Projects','#projects'],['Education','#education'],['Contact','#contact']]

export function Navbar(){
  const [open,setOpen]=useState(false)
  const [notice,setNotice]=useState('')
  const showNotice=(label:string)=>{
    if(label==='Contact') return
    setNotice(label)
    window.setTimeout(()=>setNotice(''),1500)
  }
  const handleNav=(label:string,href:string)=>{
    showNotice(label)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({behavior:'smooth'})
  }
  return <>
    <nav className="nav">
      <a className="brand" href="#home">JPS<span style={{color:'#78c7ff'}}>.</span></a>
      <div className="navlinks">
        {links.map(([x,h])=><a key={h} href={h} onClick={(e)=>{e.preventDefault();handleNav(x,h)}} onTouchStart={()=>showNotice(x)}>{x}</a>)}
      </div>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
    </nav>
    {open&&<div className="mobile-menu">
      {links.map(([x,h])=><a key={h} href={h} onClick={(e)=>{e.preventDefault();handleNav(x,h)}} onTouchStart={()=>showNotice(x)}>{x}</a>)}
    </div>}
    {notice&&<div className="section-pop" role="status" aria-live="polite">{notice}</div>}
  </>
}
