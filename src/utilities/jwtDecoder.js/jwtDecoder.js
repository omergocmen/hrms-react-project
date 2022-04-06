import jwtDecode from "jwt-decode";

export default function decodeToken(){
    if(localStorage.getItem("token")){
        return jwtDecode(localStorage.getItem("token"))
    }else{
        return "";
    }
}