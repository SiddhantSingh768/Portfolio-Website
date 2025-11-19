import {useState,useEffect} from 'react'
export default function useLocalStorage(key,initialValue){const [v,setV]=useState(()=>{try{const i=localStorage.getItem(key);return i?JSON.parse(i):initialValue}catch{return initialValue}});useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(v))}catch{}},[key,v]);return [v,setV]}
