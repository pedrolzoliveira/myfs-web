import { api, DefaultResponseData } from "./api"

interface File {
    id: string
    name: string
    location: string
    folderId: string
    createdAt: string
    updatedAt: string
}

interface CreateData {
    name: string
    id: string
}

interface Rename {
    file: File
}

async function rename(data: CreateData) {
    const response = await api.put<DefaultResponseData<Rename>>('/files', data)
    return response.data.payload
}


async function destroy(id: string) {
    const response = await api.delete<DefaultResponseData<undefined>>('/files', { data: { id } })
    return response.data.ok
}


export const FileService = {
    rename,
    destroy
}