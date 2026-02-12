const cards=[
  {title:'DevSync',desc:'A full-stack, local-first Markdown editor featuring real-time synchronization, offline capabilities, and AI-powered writing assistance built with React 19, Node.js, and Google Gemini.',img:'/projects/Devsync.png',url:'https://devsync-md-editor.vercel.app/'},
  {title:'MailFlow',desc:'Developed a scalable email marketing platform using React 19, TypeScript, and Tailwind CSS, featuring a responsive dashboard for real-time campaign analytics using Recharts',img:'/projects/mailflow.png',url:'https://mailflow-bulk-emails.vercel.app/'},
  {title:'Portfolio Website',desc:'This portfolio website is a single-page application built with React, utilizing Vite as a build tool for a fast development experience. Styling is handled efficiently with Tailwind CSS, providing a modern and responsive user interface.',img:'/projects/Portfolio.png',url:'https://siddhantsingh.vercel.app/'}
]
export default function Projects(){
  return (<div className="pt-28 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Projects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c,i)=>(<a key={i} href={c.url} className="group glass rounded-2xl overflow-hidden hover:translate-y-[-6px] transition-transform">
          <img src={c.img} alt="" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          <div className="p-6"><div className="text-2xl font-semibold mb-2">{c.title}</div><div className="text-gray-700 dark:text-gray-300">{c.desc}</div></div>
        </a>))}
      </div>
    </div>
  </div>)
}
