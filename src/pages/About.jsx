import {useEffect,useState} from 'react'
export default function About(){
  const [ok,setOk]=useState(false); useEffect(()=>{const i=new Image(); i.src='/profile.jpg'; i.onload=()=>setOk(true)},[])
  return (<div className="pt-28 min-h-screen flex items-center">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Me</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">I'm <strong>Siddhant Singh</strong>, Full-Stack Developer skilled in React, TypeScript, Node.js, Express, and MongoDB. Experience building and deploying authenticated web applications with REST APIs and database integration. Strong foundation in JavaScript, backend development, and problem solving. Seeking an entry-level software development role.</p>
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
