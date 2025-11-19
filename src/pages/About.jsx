import {useEffect,useState} from 'react'
export default function About(){
  const [ok,setOk]=useState(false); useEffect(()=>{const i=new Image(); i.src='/profile.jpg'; i.onload=()=>setOk(true)},[])
  return (<div className="pt-28 min-h-screen flex items-center">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Me</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">I'm <strong>Siddhant Singh</strong>, A full-stack web developer with a B.Tech degree.  I have developed dynamic, user-friendly applications such as a <em>expense tracker</em> and a <em>image compression website</em>.  I enjoy writing clean code, finding solutions to issues, and creating quick, stylish, and useful digital experiences.  I enjoy working in cooperative groups, and I'm thrilled to be a part of cutting-edge tech initiatives.</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className={`relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-2 border-white/20 shadow-glow transform transition-all duration-700 ${ok?'opacity-100 translate-y-0':'opacity-0 translate-y-4'}`}>
          <img src="/profile.jpg" alt="Siddhant Singh" className="h-full w-full object-cover" loading="eager"/>
          <div className="absolute inset-0 rounded-full ring-8 ring-brand-blue/20 animate-pulse pointer-events-none"></div>
        </div>
      </div>
    </div>
  </div>)
}
