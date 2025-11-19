const SKILLS=[
  {name:'React',level:90,tip:'React — Frontend Library',icon:'M10 2h4l8 8v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z'},
  {name:'Node.js',level:85,tip:'Node.js — Backend Runtime',icon:'M4 4h16v16H4z'},
  {name:'Express',level:80,tip:'Express — Node Framework',icon:'M3 7h18M3 12h18M3 17h18'},
  {name:'JavaScript',level:90,tip:'JavaScript — Language',icon:'M12 2l9 4v6c0 5-3.5 9.74-9 12-5.5-2.26-9-7-9-12V6l9-4z'},
  {name:'TypeScript',level:75,tip:'TypeScript — Typed JS',icon:'M4 4h16v16H4z'},
  {name:'Tailwind CSS',level:85,tip:'Tailwind — Utility CSS',icon:'M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12z'},
  {name:'MongoDB',level:70,tip:'MongoDB — NoSQL DB',icon:'M12 2c4 6 4 12 0 20-4-8-4-14 0-20z'},
  {name:'Git/GitHub',level:85,tip:'Git — Version Control',icon:'M12 2a5 5 0 0 0-5 5v3L4 13v4l8 5 8-5v-4l-3-3V7a5 5 0 0 0-5-5z'},
]
export default function Skills(){
  return (<div className="pt-28 min-h-screen relative">
    <div className="absolute inset-0 pointer-events-none bg-skills-waves opacity-80 dark:opacity-0"></div>
    <div className="absolute inset-0 pointer-events-none gridbg opacity-0 dark:opacity-100"></div>
    <div className="relative max-w-7xl mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10">Skills</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((s,idx)=>(
          <div key={idx} className="group rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-sky-200/70 dark:border-sky-400/20 hover:shadow-glow transition-all">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-blue"><path fill="currentColor" d={s.icon}/></svg>
              <div className="text-xl font-semibold tooltip" data-tip={s.tip}>{s.name}</div>
            </div>
            <div className="h-3 w-full bg-gray-200/70 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand-blue to-sky-400 rounded-full" style={{width:s.level+'%'}}></div>
            </div>
            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{s.level}%</div>
          </div>
        ))}
      </div>
    </div>
  </div>)
}
