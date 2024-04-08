import { useState } from 'react';
import { BrowserRouter, Routes, } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import NavigationButtons from './components/NavigationButtons';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';


// Import your view components here
// import CreateProject from './views/CreateProject';
// import AssessFiles from './views/AssessFiles';
// ...

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <BackgroundGradientAnimation>
        <NavigationButtons />
        <Routes>
          {/* Define your routes here */}
          {/* <Route path="/create-project" element={<CreateProject />} />
              <Route path="/assess-files" element={<AssessFiles />} />
              ... */}
        </Routes>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>INFILTR8</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR updates.
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </BackgroundGradientAnimation>
    </BrowserRouter>
  );
}

export default App;
