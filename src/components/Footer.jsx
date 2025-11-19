import {useEffect,useState} from 'react'
function f12(d){let h=d.getHours(),m=(''+d.getMinutes()).padStart(2,'0'),s=(''+d.getSeconds()).padStart(2,'0');const a=h>=12?'PM':'AM';h=h%12;h=h?h:12;return `${h}:${m}:${s} ${a}`}
export default function Footer(){
  const [now,setNow]=useState(new Date());const [place,setPlace]=useState('Detecting…')
  useEffect(()=>{const t=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(t)},[])
  useEffect(()=>{ if(!navigator.geolocation){setPlace('Location unavailable');return}
    navigator.geolocation.getCurrentPosition(async pos=>{try{const {latitude,longitude}=pos.coords;const url=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;const r=await fetch(url);const j=await r.json();const city=j.address.city||j.address.town||j.address.village||j.address.state||'';const country=j.address.country||'';setPlace(`${city?city+', ':''}${country}`.trim())}catch{setPlace('Location permission denied')}},()=>setPlace('Location permission denied'))},[])
  const ds=now.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'2-digit'})
  return (<div className="fixed left-4 bottom-4 z-40"><div className="px-3 py-2 rounded-xl glass text-sm md:text-base"><span className="mr-2">📅 {ds}</span><span className="mr-2">🕒 {f12(now)}</span><span>📍 {place}</span></div></div>)
}
