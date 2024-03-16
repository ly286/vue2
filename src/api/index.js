import axios from "axios";

export default {
    getzhuye(){
        return axios.get('/zhuye/all')
    }
}