import {NavLink} from 'react-router-dom'
import {useTheme} from './ThemeProvider'
export default function Navbar(){
  const {theme,toggle}=useTheme()
  return (<header className="fixed top-0 inset-x-0 z-50">
    <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between glass rounded-b-2xl">
      <NavLink to="/" className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-brand-blue to-sky-400 animate-pulse"></div>
        <div className="leading-tight"><div className="text-2xl font-extrabold tracking-tight">Siddhant Singh</div><div className="text-sm text-gray-600 dark:text-gray-300">Full‑Stack Developer</div></div>
      </NavLink>
      <nav className="hidden md:flex items-center gap-6 text-lg">
        <NavLink className="hover:text-brand-blue transition-colors" to="/">Home</NavLink>
        <NavLink className="hover:text-brand-blue transition-colors" to="/about">About</NavLink>
        <NavLink className="hover:text-brand-blue transition-colors" to="/projects">Projects</NavLink>
        <NavLink className="hover:text-brand-blue transition-colors" to="/skills">Skills</NavLink>
        <NavLink className="hover:text-brand-blue transition-colors" to="/contact">Contact</NavLink>
      </nav>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className="px-3 py-2 rounded-xl border border-black/10 dark:border-white/10 hover:btn-glow transition-all text-sm md:text-base">{theme==='dark'?'🌙 Dark':'☀️ Light'}</button>
        <a href="/CV.pdf" download className="hidden xs:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue text-white font-semibold hover:scale-[1.03] btn-glow transition-all">⬇️ Download CV</a>
      </div>
    </div>
  </header>)
}
