
import './App.css';
import CardsGame from './components/CardsGame';
import styles from "./App.module.css"

function App() {
  return (
    <div className="App">
        <header>
          <h1 className={styles.title}>
            Games 
          </h1>
        </header>
        <main>
         <CardsGame/>
        </main>
    </div>
  );
}

export default App;
