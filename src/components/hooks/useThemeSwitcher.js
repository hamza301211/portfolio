import  { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const[mode,setMode]=useState("dark")

    useEffect(()=>{
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
    },[mode])
    
  return [mode,setMode]
}

export default useThemeSwitcher