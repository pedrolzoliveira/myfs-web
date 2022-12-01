import { useQuery, useMutation, useQueryClient } from "react-query";
import { FolderService } from "../services/folder-service";

export function useCreateFolder() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: FolderService.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['folders'])
        }
    })
}

export function useFolder(id: string) {
    return useQuery(`folder-${id}`, () => FolderService.getFolder(id))
}

export function useFolders() {
    return useQuery('folders', FolderService.getFolders, {
        select(data) {
            return data.map(folder => {
                return {
                    ...folder,
                    updatedAt: new Date(folder.updatedAt).toLocaleDateString(),
                    createdAt: new Date(folder.createdAt).toLocaleDateString()
                }
            })
        },
    })
}