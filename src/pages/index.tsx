import { SideBar } from "../components/side-bar";
import { FileController } from "../controllers/file-controller";
import { Protected } from "../utils/protected";
import { Button, Input, Layout } from "antd";

const { Header, Content, Sider } = Layout

export default function Home() {
  Protected()
  
  return (
    <SideBar>        
        <FileController/>
    </SideBar>
  )
}
