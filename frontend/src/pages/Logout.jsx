import React, { useEffect } from "react";
export default function Logout(){
  useEffect(()=>{ localStorage.removeItem("token"); localStorage.removeItem("user"); },[]);
  return <div style={{color:'#fff'}}>You have been logged out.</div>;
}
