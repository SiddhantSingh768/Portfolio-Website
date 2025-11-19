import {createContext,useContext,useEffect} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
const C=createContext()
export function ThemeProvider({children}){
  const [theme,setTheme]=useLocalStorage('theme','dark')
  useEffect(()=>{const r=document.documentElement; theme==='dark'?r.classList.add('dark'):r.classList.remove('dark')},[theme])
  const toggle=()=>setTheme(theme==='dark'?'light':'dark')
  return <C.Provider value={{theme,toggle}}>{children}</C.Provider>
}
export const useTheme=()=>useContext(C)
