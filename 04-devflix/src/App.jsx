import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logotipo da plataforma de streaming DEVFLIX com fundo preto e o nome em letras vermelhas destacadas"
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>
      <Rodape>Caroline</Rodape>
    </div>
  );
};

export default App;
