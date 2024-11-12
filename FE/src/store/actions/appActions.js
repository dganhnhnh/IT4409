import actionTypes from './actionTypes';

const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});

export {
    appStartUpComplete, setContentOfConfirmModal
}