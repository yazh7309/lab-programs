export default function Greeting() {
  const [greeting, setGreeting] = useState("");
  const[time,setTime]=useState(""); 
  const intervalId = setInterval(() => {
    const hour = now.gethours();
    const min = now.getMinutes().toString().padStart(2, "0");
    const sec = now.getSeconds().toString().padStart(2, "0");
    if (hour < 12) {
      setGreeting("Good morning");
      setTime("Morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
      setTime("Afternoon");
    } else {
      setGreeting("Good evening");
      setTime("Evening");
    }
    seTime(`${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
    return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">{greeting}</h1>
      <p className="text-xl">Current time: {time}</p>
    </div>
  );    
}