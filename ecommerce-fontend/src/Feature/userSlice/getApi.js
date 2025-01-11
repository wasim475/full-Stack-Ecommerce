import axios from 'axios';

export const getusers = ()=>{
    const userData = axios.get("http://localhost:1559/api/v1/auth/users")
    return userData;
}