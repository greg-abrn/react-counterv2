import { useState } from "react";
import "./App.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function App() {
  const [tab, setTab] = useState([0]);

  return (
    <>
      <header>
        <img src="" alt="" />
        <h1>React Counter V2</h1>
      </header>
      <main>
        <div className="div-add-counter">
          {/* Dans le button ci dessous, lorsqu'on clique sur Add Counter, on va push un nouvel élément dans le tableau, 
          qui lui même est dans un state. Ça veut dire qu'à chaque fois que l'on clique, on va créer un nouveau counter */}
          <button
            onClick={() => {
              // 1 : Création de la copie du tableau [tab]
              const newTab = [...tab];
              // 2 : Modif de la copie
              newTab.push(0);
              // 3 : MaJ du state avec sa copie
              setTab(newTab);
            }}
          >
            Add Counter
          </button>
          <section>
            {/* .map ici */}
            {tab.map((elem, index) => {
              return (
                <div className="div-counter">
                  <FaMinus
                    onClick={() => {
                      setTab(tab - 1);
                    }}
                  />

                  <p>{tab}</p>

                  <FaPlus
                    onClick={() => {
                      setTab(tab + 1);
                    }}
                  />

                  <button
                    onClick={() => {
                      setTab(0);
                    }}
                  >
                    Reset
                  </button>
                </div>
              );
            })}
          </section>
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
