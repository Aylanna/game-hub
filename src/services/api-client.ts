import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'c5af6af685f940a78cec4f998d3f36e9'
    }
})