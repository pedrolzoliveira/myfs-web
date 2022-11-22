import { api, DefaultResponseData } from "./api";

interface Folder {
    id: string
    name: string
    parentId: string | null
    userId: string
    createdAt: string
    updatedAt: string
}

interface Create {
    folder: Folder
}

interface CreateData {
    name: string
    parentId?: string
}

async function create(data: CreateData) {
    const response = await api.post<DefaultResponseData<Create>>('/folders', data)
    return response.data.payload.folder
}


interface MoveData {
    id: string 
    parentId: string | null
}

interface Move {
    folder: Folder
}
async function move(data: MoveData) {
    const response = await api.put<DefaultResponseData<Move>>('/folders/move', data)
    return response.data.payload 
}

interface RenameData {
    id: string
    name: string
}

interface Rename {
    folder: Folder
}

async function rename(data: RenameData) {
    const response = await api.put<DefaultResponseData<Rename>>('/folders', data)
    return response.data.payload.folder
}

async function destroy(id: string) {
    const response = await api.delete<DefaultResponseData<undefined>>('/folders', { data: { id } })
    return response.data.ok
}


interface GetFolders {
    folders: Folder[]
}

export async function getFolders() {
    const response = await api.get<DefaultResponseData<GetFolders>>('/folders')
    return response.data.payload.folders
}

interface GetFolder {
    folder: Folder
}

export async function getFolder(id: string) {
    const response = await api.get<DefaultResponseData<GetFolder>>('/folders', { data: { id } })
    return response.data.payload.folder

}

export const FolderService = {
    create,
    move,
    rename,
    destroy,
    getFolders,
    getFolder
}