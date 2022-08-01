import { useEffect, useState } from "react";

const Route = ({ path, children }) => {

  // 4
  const [curPathName,setCurpathName] = useState(window.location.pathname)

  useEffect(()=>{
    const onLocatonChange = ()=>{

      setCurpathName(window.location.pathname)
      console.log('on Locaton Change'); 
    }
    window.addEventListener('popstate',onLocatonChange)
    return ()=>{
      window.removeEventListener('popstate' , onLocatonChange)
    }
  },[])

  // return window.location.pathname === path ? children : null;
  return curPathName === path ? children : null;
};

export default Route;
