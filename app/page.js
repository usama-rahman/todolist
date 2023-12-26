"use client";

import { Cagliostro, Climate_Crisis } from "next/font/google";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, discription }]);
    console.log(mainTask);
    setTitle("");
    setDiscription("");
  };
  const deletHandeler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  let renderTask = <h2>No Task Here</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="mb-4" key={i}>
          <div className="flex justify-between font-gray mx-64">
            <h4 className="text-2xl font-semibold">{t.title}</h4>
            <h5 className="text-xl">{t.discription}</h5>
            <button
              onClick={deletHandeler}
              className="bg-red-600 py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div className="w-full h-screen block justify-center items-center">
        <h1 className="text-2xl text-center my-10">Usama's ToDo List</h1>
        <form
          className="w-full flex justify-center my-5"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className="text rounded bg-slate-200 px-3 py-1 mx-3 text-slate-800"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="text rounded bg-slate-200 px-3 py-1 mx-3 text-slate-700"
            placeholder="Enter Discription"
            value={discription}
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
          <button className="px-4 bg-slate-800 rounded mx-3">Add Task</button>
        </form>
        <hr className="my-10" />
        <div className="p-12 mx-64">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
