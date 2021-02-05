/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
    const pivot = arr[0];
    let pivotIdx = 0;
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < pivot) {
            const nextVal = arr[i];
            arr.splice(i, 1);
            arr.unshift(nextVal);
            pivotIdx++;
        }
        i++;
    }
    return pivotIdx;
}

// function pivot(arr, start = 0, end = arr.length) {
//     const subArr = arr.splice(start, end - start);
//     const pivot = subArr[0];
//     let pivotIdx = 0;
//     let i = 1;
//     while (i < subArr.length) {
//         if (subArr[i] < pivot) {
//             const nextVal = subArr[i];
//             subArr.splice(i, 1);
//             subArr.unshift(nextVal);
//             pivotIdx++;
//         }
//         i++;
//     }
//     if (arr.length) arr.splice(start, 0, ...subArr);
//     else for (let val of subArr) arr.push(val);
//     return pivotIdx;
// }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let left = [];
    let right = [];
    const pivotIdx = pivot(arr);
    if (pivotIdx === 0) {
        left = arr.splice(0, 1);
        right = quickSort(arr);
    } else {
        left = quickSort(arr.splice(0, pivotIdx));
        right = quickSort(arr);
    }
    arr = left.concat(right);
    return arr;
}

module.exports = { pivot, quickSort };