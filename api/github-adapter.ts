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

async function getAccessToken(code: string){
    const {data} = await axios.post<AccessTokenResponse>(TOKEN_URL, {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
    })
    return data.access_token
}
