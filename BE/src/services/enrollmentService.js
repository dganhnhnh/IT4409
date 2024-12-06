import db from '../models/index'
let registerCourse = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.userID) {
                let isRegister = await db.Enrollments.findOne({
                    where: { userID: data.userID, courseID: data.courseID }
                })
                if (isRegister) {
                    resolve({
                        errCode: 1,
                        message: "You have already register this course"
                    })
                } else {
                    await db.Enrollments.create({
                        courseID: data.courseID,
                        userID: data.userID
                    })
                    resolve({
                        errCode: 0,
                        message: "register this course success",
                    });
                }
            } else {
                // TODO error msg not correct
                resolve({
                    errCode: 2,
                    message: "Error registering this course. Check your information again",
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getUsersRegisterCourse = (courseId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let usersRegisterCourse = '';
            let courses = '';

            if (courseId === 'ALL') {
                courses = await db.Enrollments.findAll();
                usersRegisterCourse = courses;
            }
            if (courseId && courseId !== 'ALL') {
                usersRegisterCourse = await db.Enrollments.findAll({
                    where: { courseID: courseId },
                });
            }
            resolve(usersRegisterCourse);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    registerCourse: registerCourse,
    getUsersRegisterCourse: getUsersRegisterCourse
}