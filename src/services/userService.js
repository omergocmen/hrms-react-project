import axios from '../utilities/interceptor/jwtInterceptor'
import jwtDecode from 'jwt-decode';

export default class UserService{
    getUser(){
        const token =localStorage.getItem("token");
        const email=jwtDecode(token).sub;
        return axios.get("http://localhost:8080/api/users/email?email="+email);
    }
}