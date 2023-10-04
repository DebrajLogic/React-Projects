import { useState } from "react"

function App() {
  const [color, setColor] = useState('lavender');

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button className="px-2 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('red')} style={{backgroundColor: 'red'}} >Red</button>
          <button className="px-2 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}} >Orange</button>
          <button className="px-2 py-1 rounded-full text-black shadow-lg" onClick={() => setColor('yellow')} style={{backgroundColor: 'yellow'}} >Yellow</button>
          <button className="px-2 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('green')} style={{backgroundColor: 'green'}} >Green</button>
          <button className="px-2 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}} >Blue</button>
          <button className="px-2 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('indigo')} style={{backgroundColor: 'indigo'}} >Indigo</button>
          <button className="px-2 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('violet')} style={{backgroundColor: 'violet'}} >Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
