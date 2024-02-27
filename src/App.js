import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="programming" />
        </main>
        <footer className="App-footer">
          This project was coded by Aleksandra Jablonska and is open-sourced on{" "}
          <a
            href="https://github.com/ale-aleksandra/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
