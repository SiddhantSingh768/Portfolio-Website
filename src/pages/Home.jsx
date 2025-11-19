import {Link} from 'react-router-dom'
export default function Home(){
  return (<main className="relative pt-28 min-h-screen flex items-center justify-center">
    <section className="w-full">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-hero font-extrabold tracking-tight leading-tight mb-6"><span className="gradient-text">Full‑Stack</span> Developer</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">Passionate Web Developer & Engineering Student | Open to Exciting Opportunities</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/projects" className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:scale-[1.03] btn-glow transition-all">View Projects</Link>
          <Link to="/about" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:scale-[1.03] btn-glow transition-all">About Me</Link>
          <a href="/CV.pdf" download className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:scale-[1.03] btn-glow transition-all">⬇️ Download CV</a>
        </div>
      </div>
    </section>
  </main>)
}
