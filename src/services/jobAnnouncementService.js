import axios from '../utilities/interceptor/jwtInterceptor'

export default class JobAnnouncementService{
    getJobAnnouncments(){
        return axios.get("/api/job_announcements/getAll");
    }

    addJobAnnouncment(JobAnnouncement){
        return axios.post("/api/job_announcements/add",JobAnnouncement);
    }
}