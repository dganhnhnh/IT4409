import axios from '../axios';
import * as queryString from 'query-string';

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     * 123456
     */
    login(loginBody) {
        return axios.post(`/admin/login`, loginBody)
    },

};

export default adminService;