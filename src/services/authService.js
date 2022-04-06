import axios from "axios";

export default class AuthService{
    login(user){
        return axios.post("http://localhost:8080/authenticate",user);
    }
}