const firstCaseInterval = []  // Expected solution: 0
const secondCaseInterval = [1, null, {}]  // Expected solution: 3
const testCases = [firstCaseInterval, secondCaseInterval]

var argumentsLength = function(args) {
    return args.length
};

testCases.map((testCase, testIndex) => {
    console.log("Test Number: %s", testIndex);
    console.log(argumentsLength(testCase))
})