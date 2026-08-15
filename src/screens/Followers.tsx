import { useOutletContext } from "react-router-dom"

interface IFollowerContext {
    nameOfMyUser: string,   
}

export default function Followers () {
    const {nameOfMyUser} = useOutletContext<IFollowerContext>();
    return (
        <h4>{nameOfMyUser}'s followers</h4>
    )
}