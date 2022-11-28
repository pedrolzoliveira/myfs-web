import { SideBar } from "../components/side-bar"
import { Protected } from "../utils/protected"
import {  } from '../hooks/user-hooks'

const Profile = () => {
    Protected()
    
    return (
        <SideBar>
            <div>Profile</div>
        </SideBar>
    )
}

export default Profile