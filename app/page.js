"use client"
import { Cagliostro, Climate_Crisis } from "next/font/google";
import React,{useState} from "react";

const page = () =>{
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const submitHandler = (e) =>{
    e.preventDefult()
    console.log(title);
    console.log(discription);
    setTitle("")
    setDiscription("")
  }
  return (
    <>
    <div className="w-full h-screen block justify-center items-center">
      <h1 className="text-2xl text-center my-10">Usama's ToDo List</h1>
      <form className="w-full flex justify-center my-5" onSubmit={submitHandler}>
        <input 
          type="text" 
          className="text rounded bg-slate-200 px-3 py-1 mx-3 text-slate-800" 
          placeholder="Enter Title" 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input 
          type="text" 
          className="text rounded bg-slate-200 px-3 py-1 mx-3 text-slate-700" 
          placeholder="Enter Discription" 
          value={discription}
          onChange={(e) => {
            setDiscription(e.target.value)
          }}
        />
        <button className="px-4 bg-slate-800 rounded mx-3">Add Task</button>
      </form>
    </div>
    </>
  )
}

export default page