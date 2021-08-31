const reverseArrOrStr = function (input) {
    console.time("executionTime");
    if (input.length > 0) {
        for (let index = 0; index < input.length / 2; index++) {
            [input[index], input[input.length - 1 - index]] = [input[input.length - 1 - index], input[index]]
            console.timeLog("executionTime");
        }
    }
    return input
}
console.log(reverseArrOrStr([1, 2, 3, 4, 5, 6]))
