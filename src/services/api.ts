import axios from "axios";

export type DefaultResponseData<T> = {
    ok: boolean
    payload: T
    message?: string
    errors?: any[]
}

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
})