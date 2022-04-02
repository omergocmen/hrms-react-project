import axios from '../utilities/interceptor/jwtInterceptor'

export default class CandidateService{
    getEmployers(){
        return axios.get("/api/employers/getAll")
    }
    addEmployers(employers){
        return axios.post("/api/employers/add",employers);
    }
}