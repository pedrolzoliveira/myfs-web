import { SideBar } from "../components/side-bar"
import { Protected } from "../utils/protected"

const Tags = () => {
    Protected()
    
    return (
        <SideBar>
            <div>tags</div>
        </SideBar>
    )
}

export default Tags