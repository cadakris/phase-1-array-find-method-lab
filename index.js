// code your solution here
// function superbowlWin (arr) {
//    const found = arr.find(element => element.result === "W")
//     return found && found.year
// }


// write a function called SuperbowlWin() that takes in 1 argument an array of objects
// each object has a year and a result
// use find to test each object to see if result is"W"
// if it is a win return the year
// if not a win return undefined

const superbowlWin = (arrayOfObj) => {
    const foundRecord = arrayOfObj.find(record => record.result === "W");
        return (foundRecord ? foundRecord.year : undefined);
}

// function superbowlWin (arrayOfObj) {
//     const foundRecord = arrayOfObj.find(record => record.result === "W");
//         return (foundRecord ? foundRecord.year : undefined);
// }