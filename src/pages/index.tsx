import { CreateFolderForm } from "../components/forms/create-folder-form"
import { useFolders } from "../hooks/folder-hooks"

export default function Home() {
  const { data: folders } = useFolders()
  return (
    <div>
      {folders?.map(folder => folder.name)}
      <div className="bg-slate-300 p-4">
        <CreateFolderForm/>
      </div>
    </div>
  )
}
