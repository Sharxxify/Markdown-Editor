import React, { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import Markdown from "markdown-to-jsx";

export default function FinalMarkdown() {
  const buttons = [
    { id: 1, name: "bold" },
    { id: 2, name: "heading1" },
    { id: 3, name: "heading2" },
    { id: 4, name: "heading3" },
    { id: 5, name: "heading4" },
    { id: 6, name: "heading5" },
    { id: 7, name: "heading6" },
    { id: 8, name: "italic" },
    { id: 9, name: "Copy Markdown" },
    { id: 10, name: "Copy HTML" },
  ];

  const [mdInput, setMdInput] = useState(
    "# **This Markdown editor is made by** \n # **Sreehaas Penugonda** \n u may write ur own here with the help of toolbar"
  );
  const [htmlOut, setHtmlOut] = useState("");

  function buttonfunc(name) {
    if (name === "bold") {
      setMdInput((mdInput) => mdInput + "\n**bold**");
      toast.info("Bold Text Inserted");
    } else if (name === "heading1") {
      setMdInput((mdInput) => mdInput + "\n# Heading1");
      toast.info("Heading-1 Inserted");
    } else if (name === "heading2") {
      setMdInput((mdInput) => mdInput + "\n## Heading2");
      toast.info("Heading-2 Inserted");
    } else if (name === "heading3") {
      setMdInput((mdInput) => mdInput + "\n### Heading3");
      toast.info("Heading-3 Inserted");
    } else if (name === "heading4") {
      setMdInput((mdInput) => mdInput + "\n#### Heading4");
      toast.info("Heading-4 Inserted");
    } else if (name === "heading5") {
      setMdInput((mdInput) => mdInput + "\n##### Heading5");
      toast.info("Heading-5 Inserted");
    } else if (name === "heading6") {
      setMdInput((mdInput) => mdInput + "\n###### Heading6");
      toast.info("Heading-6 Inserted");
    } else if (name === "italic") {
      setMdInput((mdInput) => mdInput + "\n*italic*");
      toast.info("Italic text Inserted");
    } else if (name === "Copy Markdown") {
      copy(mdInput);
      toast.success("Markdown Copied!");
    } else if (name === "Copy HTML") {
      copy(htmlOut);
      toast.success("HTML Copied!");
    }
  }

  useEffect(() => {
    const el = document.querySelector(".output");
    if (el) {
      const mdToHTML = el.innerHTML;
      setHtmlOut(mdToHTML);
    }
  }, [mdInput]);

  return (
    <div className="flex md:flex-row flex-col gap-6 justify-center p-6 mt-6">
      <div className="w-full md:w-1/2">
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-950 text-white text-2xl md:text-3xl lg:text-4xl px-3 py-2 rounded-t-md shadow-lg">
          <span className="font-bold">Markdown Editor</span>
        </div>
        <div className="bg-gray-900">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-1 p-2 bg-gradient-to-r from-teal-400 to-cyan-600 font-bold">
            {buttons.map((buttons) => (
              <button
                className="p-2 text-center text-[10px] md:text-sm lg:text-base border-2 border-transparent hover:border-teal-400 rounded hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 text-white transition-all"
                type="button"
                key={buttons.id}
                title={buttons.name}
                onClick={() => buttonfunc(buttons.name)}
              >
                {buttons.name}
              </button>
            ))}
          </div>
        </div>
        <textarea
          autoFocus
          className="w-full h-[300px] md:h-[600px] p-4 bg-transparent text-black font-mono rounded-b-md shadow-inner resize-none"
          value={mdInput}
          onChange={(e) => setMdInput(e.target.value)}
          placeholder="Enter markdown here..."
        ></textarea>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-950 text-white text-2xl md:text-3xl lg:text-4xl px-3 py-2 rounded-t-md shadow-lg">
          <span className="font-bold">Markdown Viewer</span>
        </div>
        <div className="w-full h-[340px] md:h-[715px] bg-transparent text-black font-mono p-4 rounded-b-md shadow-inner overflow-auto">
          <Markdown className="output">{mdInput}</Markdown>
        </div>
      </div>
    </div>
  );
}
