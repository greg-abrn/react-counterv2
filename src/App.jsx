import { useState } from "react";
import "./App.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src="" alt="" />
        <h1>React Counter V2</h1>
      </header>
      <main>
        <div className="div-add-counter">
          <button onClick={() => {}}>Add Counter</button>
        </div>
        <div className="div-counter">
          <FaMinus
            onClick={() => {
              setCount(count - 1);
            }}
          />

          <p>{count}</p>

          <FaPlus
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
        <div className="reset">
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Greg</span>
        </p>
      </footer>
    </>
  );
}

export default App;
