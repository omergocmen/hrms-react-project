import axios from 'axios';

const customAxios = axios.create({
    baseURL: `http://localhost:8080`
});

const requestHandler = request => {

    let token = localStorage.getItem("token") || "";
    request.headers["Authorization"] = `Bearer ${token}`; 
    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        window.location = '/login';
    }

    return response;
};

const errorHandler = error => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );

export default customAxios;




