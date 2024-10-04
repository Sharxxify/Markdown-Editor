import React from "react";

export default function Header() {
  return (
    <>
      <div className="m-9 flex justify-center items-center h-[400px] bg-gradient-to-br from-rose-700 to-transparent rounded-2xl shadow-lg">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-bold">
          <h1>MARKSY-A Versatile Markdown Editor</h1>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <span className="text-4xl font-[Montserrat] font-bold bg-gradient-to-r from-rose-700 to-rose-400 bg-clip-text text-transparent">
          Playground
        </span>
      </div>
    </>
  );
}
