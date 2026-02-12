const socials=[
  {name:'GitHub',url:'https://github.com/SiddhantSingh768',icon:'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.6.07-.59.07-.59 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 5 .36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z'},
  {name:'X',url:'https://x.com/Siddhant_768',icon:'M3 3h4l5 7 5-7h4l-7 10 7 8h-4l-5-7-5 7H3l7-8z'},
  {name:'Instagram',url:'https://www.instagram.com/',icon:'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm6.5-2a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 18.5 5z'},
  {name:'LinkedIn',url:'https://www.linkedin.com/in/siddhantsingh768/',icon:'M4 3h4v18H4zM9 8h4v13H9zM14 8h4v13h-4zM9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z'}
]
export default function Contact(){
  return (<div className="pt-28 min-h-screen">
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Contact</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">I keep my email private on the page — use the button below to open your email app and send me a message directly.</p>
      <div className="flex flex-wrap gap-4 mb-10">
        <a href="mailto:siddhantsingh768@gmail.com?subject=Hiring%20Inquiry%20from%20Portfolio" className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:scale-[1.03] btn-glow transition-all">✉️ Email Me</a>
        <a href="/SiddhantSinghCV.pdf" download className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:scale-[1.03] btn-glow transition-all">⬇️ Download CV</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {socials.map((s,i)=>(<a key={i} href={s.url} target="_blank" className="group glass rounded-2xl p-4 flex items-center justify-center gap-2 hover:translate-y-[-4px] transition-all">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-blue group-hover:scale-110 transition-transform"><path fill="currentColor" d={s.icon}/></svg>
          <span className="font-medium">{s.name}</span>
        </a>))}
      </div>
    </div>
  </div>)
}
