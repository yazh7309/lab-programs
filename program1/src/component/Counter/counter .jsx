import React from "react"; 
import { createRoot } from "react-dom/client"; 
import App from "./App"; 
import "./index.css"; 
createRoot(document.getElementById("root")).render( 
<React.StrictMode> 
<App /> 
</React.StrictMode> 
); 
File: Src/App.jsx 
import { useState } from "react"; 
function App() { 
  const [count, setCount] = useState(0); 
  const increment = () => { 
    setCount(count + 1); 
  }; 
  const decrement = () => { 
    setCount(count - 1); 
  }; 
 const reset = () => { 
    setCount(0); 
  }; 
  return ( 
    <div style={{ textAlign: "center", marginTop: "50px" }}> 
      <h1>React Counter App</h1> 
      <h2>{count}</h2> 
      <button onClick={increment} style={{ margin: "10px" }}> 
        Increment 
      </button> 
      <button onClick={decrement} style={{ margin: "10px" }}> 
        Decrement 
      </button> 
       <button onClick={reset} style={{ margin: "10px" }}> 
        Reset 
      </button> 
    </div> 
  ); 
} 
export default App;