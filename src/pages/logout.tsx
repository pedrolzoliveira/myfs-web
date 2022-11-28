import { useRouter } from "next/router"
import { useQueryClient } from "react-query"
import { UserService } from '../services/user-service'
export const Logout = () => {    
    const queryClient = useQueryClient()
    const { push } = useRouter()

    UserService.logOut()
    .then(() => {
        queryClient.invalidateQueries(['info'])
        localStorage.removeItem('IS_LOGGED_IN')
        push('/signin')
    })

    return (
        <div className="w-screen h-screen flex items-center justify-center">Saindo...</div>
    )
}

export default Logout