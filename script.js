const array0 = [1, 2, 3, 4, 5, 6];
const array1 = [4, 5, 6, 2, 7, 8, 9, 0];

function intersects(arr1, arr2) {
    let result = [];
    arr1.forEach(
        (i) => {
            arr2.forEach(
                (y) => {
                    if (y === i)
                    {
                        result.push(y);
                    }
                }
            )
        }
    )
    return result;
}

console.log(intersects(array0, array1));