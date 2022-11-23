import { CreateFolderForm } from "../components/forms/create-folder-form"
import { useFolders } from "../hooks/folder-hooks"

export default function Home() {
  const { data: folders } = useFolders()
  return (
    <div>
      {folders?.map(folder => <div key={folder.id}>{folder.name}</div>)}
      <div className="bg-slate-300 p-4">
        <CreateFolderForm/>
      </div>
    </div>
  )
}
