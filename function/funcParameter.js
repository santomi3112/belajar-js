const user = {
    id: 31,
    displayName: "santomi",
    fullName: "tomitio"
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`)
}

introduce(user);


// rest parameter
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1,2,3,4,5))