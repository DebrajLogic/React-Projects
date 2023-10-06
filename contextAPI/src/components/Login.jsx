
import { useContext } from 'react';
import { useState } from 'react'
import userContext from '../context/UserContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password});
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        value = {userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text" 
        placeholder='username'/>
        <input 
         value = {password}
         onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default Login