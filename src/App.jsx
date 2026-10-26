import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div className="page">
      <h1>TP Hooks Avancés – Niveau Débutant</h1>

      <section className="carte">
        <h2>Compteur avec useReducer</h2>
        <Compteur />
      </section>

      <section className="carte">
        <h2>Mettre le focus avec useRef</h2>
        <FocusInput />
      </section>

      <section className="carte">
        <h2>Compteur de rendus</h2>
        <CompteurRendu />
      </section>

      <section className="carte">
        <h2>Liste d’articles avec useFetch</h2>
        <ListeArticles />
      </section>

      <section className="carte">
        <h2>Timer avec nettoyage d’effet</h2>
        <Timer />
      </section>
    </div>
  );
}

export default App;
