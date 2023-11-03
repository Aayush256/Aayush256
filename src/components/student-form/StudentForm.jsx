import React,{useState} from 'react';

function StudentForm() {
    const [name,setName]=useState("Likhith");
    const [email,setEmail]=useState("AAYUSH@gmail.com");
    const [sem,setSem]=useState("4");
    const [branch,setBranch]=useState("cse");
    const [number,setNumber]=useState("91212478578");
  return (
    <div className='' >
        <h1>Student Registration Form</h1>
        <form>
            <input type ="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>  
            <p><input type ="email" placeholder="Enter your email" value={email}  onChange={(e)=>setEmail(e.target.value)} /></p>
            <p><input type ="number" placeholder="Enter your sem" value={sem}  onChange={(e)=>setSem(e.target.value)} /></p>
            <p><input type ="text" placeholder="Enter your branch" value={branch}  onChange={(e)=>setBranch(e.target.value)} /></p>
            <p><input type ="number" placeholder="Enter your contact number" value={number}  onChange={(e)=>setNumber(e.target.value)} /></p>
        </form>
    </div>
  )
}

export default StudentForm