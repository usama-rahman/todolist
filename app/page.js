import React from "react";

const page = () =>{
  return (
    <>
    <div className="w-full h-screen block justify-center items-center">
      <h1 className="text-2xl text-center my-10">Usama's ToDo List</h1>
      <from className="w-full flex justify-center my-5">
        <input type="text" className="text rounded bg-slate-200 px-3 py-1" placeholder="Enter Task"></input>
        <button className="px-4 bg-slate-800 rounded mx-3">Add Task</button>
      </from>
    </div>
    </>
  )
}

export default page