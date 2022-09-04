import { combineReducers } from 'redux';
import todos, { writeSaga } from './todos';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    loading,
    todos,
});

export function* rootSaga() {
    yield all([writeSaga()]);
}
export default rootReducer;
