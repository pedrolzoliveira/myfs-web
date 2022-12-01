import { SideBar } from "../components/side-bar";
import { FileController } from "../controllers/file-controller";
import { Protected } from "../utils/protected";
import { Button } from "antd";
export default function Home() {
  Protected()
  
  return (
    <SideBar>
      <Button type="primary">Boa</Button>
    </SideBar>
  )
}
