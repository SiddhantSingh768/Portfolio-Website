import {useEffect,useRef} from 'react'
import {useTheme} from './ThemeProvider'
export default function ParticleBackground(){
  const ref=useRef(null); const {theme}=useTheme()
  useEffect(()=>{
    const c=ref.current, x=c.getContext('2d'); let w,h,P,raf; const DPR=Math.min(window.devicePixelRatio||1,2)
    function resize(){ w=c.width=innerWidth*DPR; h=c.height=innerHeight*DPR; c.style.width=innerWidth+'px'; c.style.height=innerHeight+'px'; init() }
    function init(){ const n=Math.floor((w*h)/(12000*DPR)); P=[]; for(let i=0;i<n;i++){ P.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*(theme==='dark'?0.7:0.45),vy:(Math.random()-.5)*(theme==='dark'?0.7:0.45),r:Math.random()*(theme==='dark'?1.8:1.5)+0.6}) } }
    function tick(){ x.clearRect(0,0,w,h); const col=theme==='dark'?'rgba(0,180,255,0.8)':'rgba(31,111,235,0.8)'; const link=theme==='dark'?'rgba(0,180,255,0.15)':'rgba(31,111,235,0.12)'; for(const p of P){ p.x+=p.vx; p.y+=p.vy; if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0; x.beginPath(); x.arc(p.x,p.y,p.r,0,Math.PI*2); x.fillStyle=col; x.fill() } for(let i=0;i<P.length;i++) for(let j=i+1;j<P.length;j++){ const a=P[i],b=P[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy; if(d2<(100*DPR)**2){ x.strokeStyle=link; x.lineWidth=.5*DPR; x.beginPath(); x.moveTo(a.x,a.y); x.lineTo(b.x,b.y); x.stroke() } } raf=requestAnimationFrame(tick) }
    resize(); addEventListener('resize',resize); raf=requestAnimationFrame(tick); return ()=>{ removeEventListener('resize',resize); cancelAnimationFrame(raf) }
  },[theme])
  return <canvas ref={ref} className="particles"></canvas>
}
