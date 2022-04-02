import axios from '../utilities/interceptor/jwtInterceptor'

export default class JobPositionsService{
    getJobPositions(){
        return axios.get("/api/jobpositions/getAll");
    }
}