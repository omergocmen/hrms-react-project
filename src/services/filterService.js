import axios from "axios";

export default class FilterService{

    getFilterJob(){
        return axios.get("http://localhost:8080/api/JobPositions/getall");
    }
    getCities(){
        return axios.get("http://localhost:8080/api/cities/getall");
    }

}