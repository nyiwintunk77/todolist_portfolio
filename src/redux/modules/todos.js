import { createAction, handleActions } from 'redux-actions';
import * as postsApi from '../lib/api/lists';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';

const INITIALIZE = 'todos/INITIALIZE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

const [WRITE_LIST, WRITE_LIST_SUCCESS, WRITE_LIST_FAILURE] = createRequestActionTypes('todos/WRITE_LIST');
const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] = createRequestActionTypes('todos/GET_LIST');
const [DELETE_LIST, DELETE_LIST_SUCCESS, DELETE_LIST_FAILURE] = createRequestActionTypes('todos/DELETE_LIST');
const [EDIT_LIST, EDIT_LIST_SUCCESS, EDIT_LIST_FAILURE] = createRequestActionTypes('todos/EDIT_LIST');
const [EDIT_TITLE, EDIT_TITLE_SUCCESS, EDIT_TITLE_FAILURE] = createRequestActionTypes('todos/EDIT_TITLE');

export const initialize = createAction(INITIALIZE);
export const changeinput = createAction(CHANGE_INPUT, ({ key, value }) => ({ key, value }));
export const writeList = createAction(WRITE_LIST, ({ title }) => ({ title }));
export const getList = createAction(GET_LIST);
export const deleteList = createAction(DELETE_LIST, ({ id }) => ({ id }));
export const editList = createAction(EDIT_LIST, ({ id, checked }) => ({ id, checked }));
export const editTitle = createAction(EDIT_TITLE, ({ id, title }) => ({ id, title }));

const writeListSaga = createRequestSaga(WRITE_LIST, postsApi.writeList);
const getListSaga = createRequestSaga(GET_LIST, postsApi.getList);
const deleteListSaga = createRequestSaga(DELETE_LIST, postsApi.deleteList);
const editListSaga = createRequestSaga(EDIT_LIST, postsApi.editList);
const editTitleSaga = createRequestSaga(EDIT_TITLE, postsApi.editTitle);

export function* writeSaga() {
    yield takeLatest(WRITE_LIST, writeListSaga);
    yield takeLatest(GET_LIST, getListSaga);
    yield takeLatest(DELETE_LIST, deleteListSaga);
    yield takeLatest(EDIT_LIST, editListSaga);
    yield takeLatest(EDIT_TITLE, editTitleSaga);
}

const initState = {
    title: '',
    checked: false,
    publishedDate: '',
    list: [],
    listError: null,
};

const todos = handleActions(
    {
        [INITIALIZE]: (state) => initState,
        [CHANGE_INPUT]: (state, { payload: { key, value } }) => ({ ...state, [key]: value }),
        [WRITE_LIST]: (state) => ({ ...state, list: null, listError: null }),
        [WRITE_LIST_SUCCESS]: (state, { payload: list }) => ({ ...state, list }),
        [WRITE_LIST_FAILURE]: (state, { payload: listError }) => ({ ...state, listError }),
        // [GET_LIST]: (state) => ({ ...state, list: null, listError: null }),
        [GET_LIST_SUCCESS]: (state, { payload: list }) => ({ ...state, list }),
        [GET_LIST_FAILURE]: (state, { payload: listError }) => ({ ...state, listError }),
        [DELETE_LIST_SUCCESS]: (state, { payload: list }) => ({ ...state, list }),
        [DELETE_LIST_FAILURE]: (state, { payload: listError }) => ({ ...state, listError }),
        [EDIT_LIST_SUCCESS]: (state, { payload: list }) => ({ ...state, list }),
        [EDIT_LIST_FAILURE]: (state, { payload: listError }) => ({ ...state, listError }),
        [EDIT_TITLE_SUCCESS]: (state, { payload: list }) => ({ ...state, list }),
        [EDIT_TITLE_FAILURE]: (state, { payload: listError }) => ({ ...state, listError }),
    },
    initState,
);
export default todos;
