import { InstallButton } from "./components/InstallButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My PWA App</h1>
        <InstallButton />

        <div className="content">
          <p>
            นี่คือ Progressive Web App ที่สร้างด้วย Vite + React + TypeScript
          </p>

          <div className="features">
            <h2>Features:</h2>
            <ul>
              <li>✅ Offline Support</li>
              <li>✅ Installable</li>
              <li>✅ Responsive Design</li>
              <li>✅ Fast Loading</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
