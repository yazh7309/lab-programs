import { useState } from "react"; 
 
function App() { 
  const [color, setColor] = useState("white"); 
 
  return ( 
    <div className="container"> 
      <h1 className="title">Color Picker</h1> 
 
      <div className="btn-group"> 
        <button className="btn red" onClick={() => setColor("red")}> 
          Red 
        </button> 
        <button className="btn blue" onClick={() => setColor("blue")}> 
          Blue 
        </button> 
        <button className="btn green" onClick={() => setColor("green")}> 
          Green 
        </button> 
      </div> 
      <div className="color-box" style={{ backgroundColor: color }}></div> 
      {/* CSS inside the same file */} 
      <style>{` 
        :root { 
          --red: #e74c3c; 
          --blue: #3498db; 
          --green: #2ecc71; 
          --shadow: 0 5px 15px rgba(0, 0, 0, 0.15); 
          --box-border: #333; 
        } 
        body { 
          font-family: system-ui, sans-serif; 
          background: #f5f5f5; 
          padding: 40px; 
          text-align: center; 
        } 
 
        .container { 
          max-width: 500px; 
          margin: auto; 
        } 
 
        .title { 
          font-size: 2rem; 
          margin-bottom: 25px; 
        } 
 
        .btn-group { 
          display: flex; 
          justify-content: center; 
          gap: 15px; 
          margin-bottom: 30px; 
        } 
        .btn { 
          padding: 12px 22px; 
          border: 1px solid black; 
          font-size: 16px; 
          font-weight: 600; 
          border-radius: 8px; 
          color: white; 
          cursor: pointer; 
          transition: 0.3s; 
          box-shadow: var(--shadow); 
        } 
        .btn:hover { 
          transform: scale(1.05); 
          border:1px solid ; 
          border-radius: 10px 10px ; 
        } 
         .red { background: var(--red); } 
        .blue { background: var(--blue); } 
        .green { background: var(--green); } 
        .color-box { 
          width: 280px; 
          height: 160px; 
          margin: 0 auto; 
          border: 2px solid var(--box-border); 
          border-radius: 10px; 
          transition: background-color 0.4s ease; 
          box-shadow: var(--shadow); 
        } 
      `}</style> 
    </div> 
  ); 
} 
export default App;
