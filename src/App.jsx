import { useState } from "react";
import "./App.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const App = () => {
  const [tab, setTab] = useState([0]);

  return (
    <>
      <header>
        <h1>React Counter V2</h1>
      </header>
      <main>
        <div>
          <div className="manage-counter">
            {/* Dans le button ci dessous, lorsqu'on clique sur Add Counter, on va push un nouvel élément dans le tableau, 
          qui lui même est dans un state. Ça veut dire qu'à chaque fois que l'on clique, on va créer un nouveau counter */}
            <button
              // disabled est un attribut de button qui vise à désactiver le button. Ex : est-ce que la longueur du tableau est inférieur à 3 ?
              // Si oui = false donc le button n'est pas désactivé, si non = true donc l'attribut disabled devient actif et le button est désactivé.
              disabled={tab.length < 3 ? false : true}
              onClick={() => {
                // Ici, si la longueur du tableau est inférieur à 3 alors on ajoute un counter à chaque clique, sinon rien ne se passe.
                if (tab.length < 3) {
                  // 1 : Création de la copie du tableau [tab]
                  const newTab = [...tab];
                  // 2 : Modif de la copie
                  newTab.push(0);
                  // 3 : MaJ du state avec sa copie
                  setTab(newTab);
                }
              }}
            >
              Add Counter
            </button>
            <button
              disabled={tab.length > 1 ? false : true}
              onClick={() => {
                if (tab.length > 1) {
                  const newTab = [...tab];
                  newTab.pop();
                  setTab(newTab);
                }
              }}
            >
              Remove Counter
            </button>
          </div>

          <section>
            {tab.map((counter, index) => {
              return (
                <div key={index}>
                  <div className="div-counter">
                    {tab > 0 ? (
                      <FaMinus
                        onClick={() => {
                          const copy = [...tab];
                          copy[index] = copy[index] - 1;
                          // OU ===> copy[index]--
                          setTab(copy);
                        }}
                      />
                    ) : null}

                    <p>{counter}</p>
                    {/* OU ===> <p>{tab[index]}</p> */}

                    {tab < 10 ? (
                      <FaPlus
                        onClick={() => {
                          const copy = [...tab];
                          copy[index]++;
                          setTab(copy);
                        }}
                      />
                    ) : null}
                  </div>

                  <div className="reset">
                    <button
                      onClick={() => {
                        const copy = [...tab];
                        copy[index] = 0;
                        setTab(copy);
                      }}
                    >
                      Reset
                    </button>
                  </div>
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
};

export default App;
