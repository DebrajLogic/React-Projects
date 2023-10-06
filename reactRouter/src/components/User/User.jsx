
import { useParams } from "react-router-dom"

function User() {
    const {userID} = useParams();
  return (
    <div className="text-center bg-green-400 text-3xl p-4">User: {userID}</div>
  )
}

export default User