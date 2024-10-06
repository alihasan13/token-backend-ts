import axios from "axios";

interface gitHubUser{
    id: number
    name: string
}

interface AccessTokenResponse{
    access_token: string
}

interface UserResponse{
    id: number
    name: string
}

const TOKEN_URL =''
const USER_URL = ''

export async function getGithubUser(code:string) {
    const token = await getAccessToken(code)
    return getuser(token)
}