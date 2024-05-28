import * as testConst from "./_constant";

const initialState = {};

interface TestRequest {
  test?: any;
  tests?: any;
  type: string;
}

const TestReducer = <T extends TestRequest>(state = initialState, action: T) => {
  switch (action.type) {
    case testConst.RECEIVE_TESTS:
      console.log("6.TestReducer---RECEIVE_TESTS");
      console.log("\t\t\tstate: ", state);
      console.log("\t\t\taction: ", action);
      return { ...state, posts: action.tests };
    /**
     *
     */
    case testConst.RECEIVE_TEST:
      console.log("6.TestReducer---RECEIVE_TEST");
      console.log("\t\t\tstate: ", state);
      console.log("\t\t\taction: ", action);
      return { ...state, post: action.test };
    /**
     *
     */
    default:
      console.log("2.TestReducer---default");
      console.log("\t\t\tstate: ", state);
      console.log("\t\t\taction: ", action);
      return state;
  }
};
export default TestReducer;
