import jwtDecode from 'jwt-decode';
import axios from '../utilities/interceptor/jwtInterceptor'


export default class CandidateService{
    getCandidates(){
        return axios.get("/api/candidates/getAll")
    }
    addCandidates(candidate){
        candidate.curriculumVitae=null;
        console.log(candidate);
        return axios.post("/api/candidates/add",candidate);
    }
    getCandidateByEmail(){
            const token =localStorage.getItem("token");
            console.log(token);
            const email=jwtDecode(token).sub;
            return axios.get("http://localhost:8080/api/candidates/email?email="+email);
    }
}