import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarTarefas from "./components/listar-tarefa";



function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listar"}>
                  Listar Tarefas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarconcluidas"}>
                  Listar Tarefas Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarnaoconcluidas"}>
                  Listar Tarefas Não Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/cadastrar"}>
                  Cadastrar Tarefa{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ListarTarefas />} />
            <Route
              path="/pages/tarefa/listar"
              element={<ListarTarefas />}
            />
            <Route
              path="/pages/tarefa/listarconcluidas"
              element={<  ListarTarefas/>}
            />
            <Route
              path="/pages/tarefa/listarnaoconcluidas"
              element={<ListarTarefas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<ListarTarefas />}
            />
          </Routes>
          <footer>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
