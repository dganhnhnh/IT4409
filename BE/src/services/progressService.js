import db from '../models/index'
let getProgressOfCourse = (userID, courseID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let progress = '';
            if (courseID && userID) {
                progress = await db.Progresses.findAll({
                    where: { courseID: courseID, userID: userID },
                    order: [['createdAt', 'DESC']],
                    limit: 1
                })
            }
            resolve(progress);
        } catch (e) {
            reject(e);
        }
    })
}
let createProgressOfCourse = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.userID && data.courseID && data.videoID) {
                let isCompletedVideo = await db.Progresses.findOne({
                    where: { courseID: data.courseID, userID: data.userID, videoID: data.videoID }
                })
                if (isCompletedVideo) {
                    resolve({
                        errCode: 2,
                        message: "You have finished learning the video already",
                    });
                } else {
                    await db.Progresses.create({
                        userID: data.userID,
                        courseID: data.courseID,
                        videoID: data.videoID,
                        completionPercentage: data.completionPercent,
                        total_time: data.totalTime,
                        completed_time: data.completed_time
                    })
                    resolve({
                        errCode: 0,
                        message: "Finished learning the video",
                    });
                }
            } else {
                resolve({
                    errCode: 1,
                    message: "Missing required paramater",
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateProgress = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.userID && data.courseID && data.videoID) {
                let progress = await db.Progresses.findOne({
                    where: { courseID: data.courseID, userID: data.userID, videoID: data.videoID }
                })
                if (progress) {
                    await db.Progresses.update({
                        completionPercentage: data.completionPercent,
                        total_time: data.totalTime,
                        completed_time: data.completed_time
                    }, {
                        where: { courseID: data.courseID, userID: data.userID, videoID: data.videoID }
                    })
                    resolve({
                        errCode: 0,
                        message: "Progress updated successfully",
                    });
                } else {
                    resolve({
                        errCode: 1,
                        message: "Progress not found",
                    });
                }
            } else {
                resolve({
                    errCode: 3,
                    message: "Missing required parameters",
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getProgressOfCourse: getProgressOfCourse,
    createProgressOfCourse: createProgressOfCourse,
    updateProgress: updateProgress
}