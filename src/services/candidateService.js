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
}