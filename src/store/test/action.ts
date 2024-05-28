import * as testConst from "./_constant";

export const getTests = <T>(requestModel: T) => {
  console.log("\n\n\n1.TestAction---getTests");
  return { type: testConst.GET_TESTS, requestModel: requestModel };
};

export const receiveTests = <T>(tests: T) => {
  console.log("5.TestAction---receiveTests");
  return { type: testConst.RECEIVE_TESTS, tests: tests };
};

export const getTest = <T>(requestModel: T) => {
  console.log("\n\n\n1.TestAction---getTest");
  return { type: testConst.GET_TEST, requestModel: requestModel };
};

export const receiveTest = <T>(test: T) => {
  console.log("5.TestAction---receiveTest");
  return { type: testConst.RECEIVE_TEST, test: test };
};
export default {
  getTest,
  receiveTest,
  receiveTests,
  getTests,
};
