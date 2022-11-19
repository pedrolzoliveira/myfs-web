import { useQuery, useMutation } from "react-query";
import { FolderService } from "../services/folder-service";

export function useCreateFolder() {
    return useMutation({
        mutationFn: FolderService.create
    })
}

export function useFolder(id: string) {
    return useQuery(`folder-${id}`, () => FolderService.getFolder(id))
}

export function useFolders() {
    return useQuery('folders', FolderService.getFolders)
}