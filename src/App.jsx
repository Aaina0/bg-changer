import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("violet");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-8">
          <div className="flex flex-wrap justify-center rounded-xl py-2 px-3 bg-slate-300 shadow-lg">
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("orangered")}
              style={{ backgroundColor: "orangered" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
            >
              Test
            </button>
            <button
              className=" px-4 py-1 rounded-full gap-5"
              onClick={() => setColor("brown")}
              style={{ backgroundColor: "brown" }}
            >
              Test
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
