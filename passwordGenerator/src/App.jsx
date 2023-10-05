import { useCallback, useEffect, useState } from "react"


function App() {

  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pwd = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(isNumber)str += '0123456789';
    if(isCharacter) str += '!@#$%^&*()_+[]{},./;|?<>';
    
    for(let i = 1; i < length; i++){
      let char = str.charAt(Math.floor(Math.random() * str.length + 1));

      pwd += char;
     }

     setPassword(pwd);

  }, [length, isNumber, isCharacter, setPassword]);

  useEffect(() => {
    passwordGenerator();
  },[length, isNumber, isCharacter, passwordGenerator]);

  return (
    <>
   
    <div className="width-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
    <h1 className="text-center text-white my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly/>
        <button className="outline-none bg-teal-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800" >copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => { setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={isNumber}
          id="numberInput"
          onChange={()=> setIsNumber((prev) => !prev)} />
          <label htmlFor='numberInput'>Add Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={isCharacter}
          id="charInput"
          onChange={()=> setIsCharacter((prev) => !prev)} />
          <label htmlFor='charInput'>Add Special Characters</label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
