
import { UserService } from '../services/user-service'
import { useMutation } from 'react-query'

export function useSignIn() {
    return useMutation({
        mutationKey: 'signin',
        mutationFn: UserService.signIn
    })
}
