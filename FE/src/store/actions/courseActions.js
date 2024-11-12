const setAllCourses = (courses) => {
    return {
        type: "SET_ALL_COURSES",
        payload: courses,
    };
};

const setAllLessons = (lessons) => {
    return {
        type: "SET_ALL_LESSONS",
        payload: lessons,
    };
};

const setAllVideos = (videos) => {
    return {
        type: "SET_ALL_VIDEOS",
        payload: videos,
    };
};

const setOpenModal = (isOpen) => {
    return {
        type: "SET_OPEN_MODAL",
        payload: isOpen,
    };
};

const setOpenEditModal = (isOpen) => {
    return {
        type: "SET_OPEN_EDIT_MODAL",
        payload: isOpen,
    };
};

const setOpenModalLesson = (isOpen) => {
    return {
        type: "SET_OPEN_MODAL_LESSON",
        payload: isOpen,
    };
};

const setOpenEditModalLesson = (isOpen) => {
    return {
        type: "SET_OPEN_EDIT_MODAL_LESSON",
        payload: isOpen,
    };
};

const setCourseId = (id) => {
    return {
        type: "SET_COURSE_ID",
        payload: id,
    };
};

const setLessonId = (id) => {
    return {
        type: "SET_LESSON_ID",
        payload: id,
    };
};

export {
    setAllCourses,
    setAllLessons,
    setAllVideos,
    setCourseId,
    setLessonId,
    setOpenEditModal,
    setOpenEditModalLesson,
    setOpenModal,
    setOpenModalLesson
}