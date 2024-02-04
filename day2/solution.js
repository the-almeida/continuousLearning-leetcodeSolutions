/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const firstCaseInterval = [[1,3], [2,6], [8,10], [15,18]]  // Expected solution: [[1,6],[8,10],[15,18]]
const secondCaseInterval = [[1,4],[4,5]]  // Expected solution: [[1,5]]

var merge = function(intervals) {
    console.log('Starting Merge:', intervals);
    let initialInterval = intervals[0]
    let nonOverlapingIntervals = [initialInterval]
    let mergedIntervalIndex = 0
    
    intervals.forEach((interval) => {
        const [currentStart, currentEnd] = interval
        const [mergedIntervalStart, mergedIntervalEnd] = nonOverlapingIntervals[mergedIntervalIndex]
        const startIsOverlaping = mergedIntervalStart>= currentStart
        const endIsOverlaping = mergedIntervalEnd >= currentStart
        if (startIsOverlaping){
            nonOverlapingIntervals[mergedIntervalIndex][0] = currentStart
        }
        if (endIsOverlaping) {
            nonOverlapingIntervals[mergedIntervalIndex][1] = currentEnd
        }
        if (!startIsOverlaping && !endIsOverlaping){
            nonOverlapingIntervals.push(interval)
            mergedIntervalIndex++
        }
    })
    console.log('\n\nresult:', nonOverlapingIntervals);
    return nonOverlapingIntervals
};


const testCases = [firstCaseInterval, secondCaseInterval]

testCases.map((testCase, testIndex) => {
    console.log("Test Number: %s", testIndex);
    merge(testCase)
})