import { api, DefaultResponseData } from "./api";

interface User {
    id: string
    name: string
    email: string
    admin: boolean
}


interface SignIn  {
    user: User
}

interface SignInData {
    email: string
    password: string
}

async function signIn(data: SignInData) {
    const response = await api.post<DefaultResponseData<SignIn>>('/users/sign-in', data)
    return response.data.payload.user
}


async function logOut() {
    const response = await api.post('/users/logout')
    return response.status === 200
}

export const UserService = {
    signIn,
    logOut
}