import axios from '../utilities/interceptor/jwtInterceptor'
import jwtDecode from 'jwt-decode';

export default class CandidateService{
    getEmployers(){
        return axios.get("/api/employers/getAll")
    }
    addEmployers(employers){
        return axios.post("/api/employers/add",employers);
    }
    getEmployerByEmail(){
        const token =localStorage.getItem("token");
        const email=jwtDecode(token).sub;
        return axios.get("http://localhost:8080/api/employers/email?email="+email);
    }
}