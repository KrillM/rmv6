import { useParams } from "react-router-dom"
import { users } from "../../db.ts"

export default function User() {
    const {userId} = useParams();

    return(
        <h1>
            {users[Number(userId)-1].name}
        </h1>
    )
}