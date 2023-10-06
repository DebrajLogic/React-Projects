import { useLoaderData } from "react-router-dom";

function Github() {
    // useEffect(() => {
    //     fetch('https://api.github.com/users/DebrajLogic')
    //     .then((response) => response.json())
    //     .then(response => setData(response))
        
    // },[]);

    // const [data, setData] = useState('');

    const data = useLoaderData(); // for optimization

    console.log(data);

  return (
    <div className="text-center m-4 bg-blue-200 p-4 text-3xl">
        <h1>Github Details</h1>
        <img className="mx-auto m-4" src={data['avatar_url']} alt='Github Profile Pic'></img>
        <ul className="text-sm">
            <li><b>Username:</b> {data['login']}</li>
            <li><b>Created:</b> {new Date(data['created_at']).toLocaleDateString()}</li>
            <li><b>Public Gists:</b> {data['public_gists']}</li>
            <li><b>Public Repos:</b> {data['public_repos']}</li>
        </ul>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DebrajLogic')
    
    return response.json();
}