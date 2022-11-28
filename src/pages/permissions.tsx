import { SideBar } from "../components/side-bar"
import { Protected } from "../utils/protected"

const Permissions = () => {
    Protected()

    return (
        <SideBar>
            <div>Permissão</div>
        </SideBar>
    )
}

export default Permissions