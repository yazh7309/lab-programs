export default function ColorPicker() {
    const [color, setColor] = useState("bg-gray-300");
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <h2 className="text-2x1 font-bold">Simple color picker</h2>
    {/*color box*/}
    <div className={`w-48 h-48 rounded-x1 ${color}`}></div>   
    {/*buttons*/}
    <div className="flex gap-4">
        <button 
        className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setColor("bg-red-500")}>Red</button>
        <button 
        className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setColor("bg-green-500")}>Green</button>
        <button 
        className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setColor("bg-blue-500")}>Blue</button>   
        </div>
    </div>
  );
}