import actionTypes from './actionTypes';

const addAdminSuccess = () => ({
    type: actionTypes.ADD_ADMIN_SUCCESS
})

const adminLoginSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo
})

const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})

export {
    addAdminSuccess, adminLoginFail, adminLoginSuccess
}


// export const processLogout = () => ({
//     type: actionTypes.PROCESS_LOGOUT
// })