import axios from '../utilities/interceptor/jwtInterceptor'

export default class JobAnnouncementService{
    getJobAnnouncments(){
        return axios.get("/api/job_announcements/getAll");
    }

    getById(id){
        return axios.get("/api/job_announcements/getById?id="+id);
    }

    addJobAnnouncment(JobAnnouncement){
        return axios.post("/api/job_announcements/add",JobAnnouncement);
    }
}