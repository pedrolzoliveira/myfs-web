import axios from "axios";
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


export const UserService = {
    signIn
}