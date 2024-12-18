import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: false
});


instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
);

export default instance;
