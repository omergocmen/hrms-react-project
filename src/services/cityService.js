import axios from '../utilities/interceptor/jwtInterceptor'

export default class CityService{
    getCities(){
        return axios.get("/api/cities/getAll");
    }
}