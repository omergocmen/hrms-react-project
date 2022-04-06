import axios from '../utilities/interceptor/jwtInterceptor'

export default class LanguageService{
    add(language){
        return axios.post("/api/languages/add",language);
    }
    getLanguages(){
        return axios.get("/api/languages/getAll");
    }
}