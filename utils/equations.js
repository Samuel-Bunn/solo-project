
export function inchesToMm(inches) {
    let answer = inches * 25.4
    return `${inches} inches is ${answer.toFixed(3)}mm`
}

export function mmToInches(mm) {
    let answer = mm / 25.4
    return `${mm}mm is ${answer.toFixed(3)} inches`
}

export function kiloToMiles(kilo) {
    let answer = kilo / .621371
    return `${kilo} kilometers is ${answer.toFixed(3)} miles`
}

export function milesToKilo(miles1) {
    let answer = miles1 * 1.60934
    return `${miles1} miles is ${answer.toFixed(3)} kilometers`
}

export function milesToFeet(miles2) {
    let answer = miles2 * 5280
    return `${miles2} miles is ${answer} feet`
}

export function feetToMiles(feet) {
    let answer = feet / 5280
    return `${feet} feet is ${answer.toFixed(3)} miles`
}

export function gramToOunce(gram) {
    let answer = gram / 28.35
    return `${gram} grams is ${answer.toFixed(3)} ounces`
}

export function ounceToGram(ounce1) {
    let answer = ounce1 * 28.35
    return `${ounce1} ounces is ${answer.toFixed(3)} grams`
}

export function ouncesToMl(ounces2) {
    let answer = ounces2 * 29.5735
    return `${ounces2} fluid ounces is ${answer.toFixed(3)}ml`
}

export function mlToOunces(ml) {
    let answer = ml / 29.5735
    return `${ml}ml is ${answer.toFixed(3)} fluid ounces`
}

export function fahrenheitToCelsius(fahrenheit) {
    const answer = ( fahrenheit - 32) * 5/9
    return `${fahrenheit} degrees F is ${answer.toFixed(3)} degrees C`
}

export function celsiusToFahrenheit(celsius) {
    const answer = (celsius * 9/5) + 32
    return `${celsius} degrees C is ${answer.toFixed(3)} degrees F`
}