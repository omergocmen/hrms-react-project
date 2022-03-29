import axios from "axios";

export default class JobAnnouncementService{
    getJobAnnouncments(){
        return axios.get("http://localhost:8080/api/job_announcements/getAll");
    }
}