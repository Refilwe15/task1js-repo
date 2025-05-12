function checkTemperatureIfElse(temp) {
    if (temp < 0) {
        console.log("It's freezing!");
    } else if (temp >= 0 && temp <= 15) {
        console.log("It's cold.");
    } else if (temp >= 16 && temp <= 25) {
        console.log("It's mild.");
    } else if (temp > 25) {
        console.log("It's warm.");
    }
}

function checkTemperatureSwitch(temp) {
    switch (true) {
        case temp < 0:
            console.log("It's freezing!");
            break;
        case temp >= 0 && temp <= 15:
            console.log("It's cold.");
            break;
        case temp >= 16 && temp <= 25:
            console.log("It's mild.");
            break;
        case temp > 25:
            console.log("It's warm.");
            break;
        default:
            console.log("Invalid temperature.");
    }
}

checkTemperatureIfElse(-5);
checkTemperatureIfElse(10);
checkTemperatureIfElse(20);
checkTemperatureIfElse(30);

checkTemperatureSwitch(-5);
checkTemperatureSwitch(10);
checkTemperatureSwitch(20);
checkTemperatureSwitch(30);
