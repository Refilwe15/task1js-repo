function checkDivisibilityIfElse(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        console.log("Divisible by both.");
    } else if (number % 2 === 0) {
        console.log("Divisible by 2.");
    } else if (number % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }
}

function checkDivisibilitySwitch(number) {
    switch (true) {
        case (number % 2 === 0 && number % 3 === 0):
            console.log("Divisible by both.");
            break;
        case (number % 2 === 0):
            console.log("Divisible by 2.");
            break;
        case (number % 3 === 0):
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
    }
}

checkDivisibilityIfElse(6);
checkDivisibilitySwitch(10); 
