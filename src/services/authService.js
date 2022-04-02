import axios from "axios";

export default class AuthService{
    login(candidate){
        return axios.post("http://localhost:8080/authenticate",candidate);
    }
}