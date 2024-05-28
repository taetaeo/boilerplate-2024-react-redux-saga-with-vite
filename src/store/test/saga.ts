import { call, put, takeEvery } from "redux-saga/effects";
import * as testActions from "./action";
import * as testConst from "./_constant";
import * as testService from "./service";

// API 응답 타입 정의 (예시)
interface TestResponse {
  data: any; // 실제 응답 데이터 타입으로 변경
}

interface Actions<T> {
  type: string;
  requestModel: T;
}

export function* getTests(action: Actions<any>) {
  try {
    console.log("3.TestSaga---getTests");
    const result: TestResponse = yield call(testService.GetTests as any, action.requestModel);
    yield put(testActions.receiveTests(result));
  } catch (error) {
    console.error("TestSaga---getTests---error: ", error);
  }
}

export function* getTest(action: Actions<any>) {
  try {
    console.log("3.TestSaga---getTest");
    const result: TestResponse = yield call(testService.GetTest, action.requestModel);
    yield put(testActions.receiveTest(result));
  } catch (error) {
    console.error("TestSaga---getTest---error: ", error);
  }
}

export default function* watchGetTestSaga() {
  yield takeEvery(testConst.GET_TESTS, getTests);
  yield takeEvery(testConst.GET_TEST, getTest);
}
