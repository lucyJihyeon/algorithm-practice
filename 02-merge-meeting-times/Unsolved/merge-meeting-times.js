// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

// var mergeMeetingTimes = function (arr) {
  
//   let sortedArr = arr.sort((a, b) => a[0] - b[0]);
//   let earliestArr = sortedArr[0];
//   let earliest = [earliestArr[0]];
//   let result = [];
//   let latest;
//   console.log(
//     "sorted array: ",
//     sortedArr,
//     "earliestArr: ",
//     earliestArr,
//     "earliest: ",
//     earliest
//   );

//   for (let i = 1; i < sortedArr.length; i++) {
//     if (earliestArr[1] >= sortedArr[i][0]) {
//       latest = earliestArr[1];
//       if (latest < sortedArr[i][1]) {
//         latest = sortedArr[i][1];
//         earliest.push(latest);
//         console.log("with latest meeting time: ", earliest);
//         result.push(earliest);
//       } 
//     } 
//   }
//   console.log("result: ", result);
//   return result;
// };

function mergeMeetingTimes(meetings) {
    // Sort the meetings by their start times
    meetings.sort((a, b) => a[0] - b[0]);

    let mergedMeetings = [meetings[0]];
    console.log("meetings: ", meetings,"mergedMeetings: ", mergedMeetings);

    for (let i = 1; i < meetings.length; i++) {
        let currentMeeting = meetings[i];
        let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // If the current meeting overlaps with the last merged meeting, merge them
        if (currentMeeting[0] <= lastMergedMeeting[1]) {
            lastMergedMeeting[1] = Math.max(lastMergedMeeting[1], currentMeeting[1]);
        } else {
            // If there's no overlap, add the current meeting to the merged list
            mergedMeetings.push(currentMeeting);
        }
    };

    return mergedMeetings;
}
