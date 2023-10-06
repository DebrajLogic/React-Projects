import { useContext } from "react"
import userContext from "../context/UserContext"


function Profile() {
    const {user} = useContext(userContext);

    if(!user)return <div>Please Login </div>
    return <div>Welcome {user.userName}</div>
}

export default Profile