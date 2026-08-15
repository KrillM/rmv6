import { Link, useParams, Outlet } from "react-router-dom"
import { users } from "../../db.ts"

export default function User() {
    const {userId} = useParams();

    return(
        <div>
            <h1>
                {users[Number(userId)-1].name}
            </h1>
            <hr/>
            <Link to="followers">See Followers</Link>
            <Outlet context={{
                nameOfMyUser: users[Number(userId)-1].name,
            }}/>
        </div>
    )
}