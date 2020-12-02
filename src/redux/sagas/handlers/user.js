import { call, put } from 'redux-saga/effects';
import {reqestGetUser} from "../requests/user";
import {setUser} from "../../ducks/user";

export function* handleGetUser(action) {
    try {
        const response = yield call(reqestGetUser)
        const { data } = response;
        yield put(setUser(data));
    } catch (e) {
        console.log(e);
    }
}
