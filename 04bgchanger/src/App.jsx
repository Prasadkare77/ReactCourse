import { useState } from "react"
function App() {
  const [color, setColor] = useState('orange')

  return (
    <>
      <h3 className="text-center justify-center">Background Color Changer</h3>
      <div className=" h-screen duration-1000" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button onClick={()=>setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'red'}}>Red</button>
            <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'green'}}>Green</button>
            <button onClick={()=>setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'blue'}}>Blue</button>
            <button onClick={()=>setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'orange'}}>Orange</button>
            <button onClick={()=>setColor('olive')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'olive'}}>Olive</button>
            <button onClick={()=>setColor('grey')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'grey'}}>Grey</button>
            <button onClick={()=>setColor('yellow')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'yellow'}}>Yellow</button>
            <button onClick={()=>setColor('pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'pink'}}>Pink</button>
            <button onClick={()=>setColor('Purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'Purple'}}>Purple</button>
            <button onClick={()=>setColor('Lavender')} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:'Lavender'}}>Lavender</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
