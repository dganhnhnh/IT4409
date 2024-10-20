import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
      <div style={contentStyle}>
        
        <h2>Scroll down to see the sticky navbar in action!</h2>
        {Array.from({ length: 50 }, (_, index) => (
          <p key={index}>
            This is a test paragraph number {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </div>
    </>
  );
}

const contentStyle = {
  paddingTop: '80px', 
  padding: '20px',
  backgroundColor: '#0e172c',
  minHeight: '200vh', 
};

export default App;
