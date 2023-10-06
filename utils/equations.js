

export function inchesToMm(inches) {
    let answer = inches * 25.4
    return `${inches} inches is ${answer.toFixed(3)}mm`
}

export function ouncesToMl(ounces) {
    let answer = ounces * 29.5735
    return `${ounces} ounces is ${answer.toFixed(3)}ml`
}

export function fahrenheitToCelsius(fahrenheit) {
    const answer = ( fahrenheit - 32) * 5/9
    return `${fahrenheit} degrees F is ${answer.toFixed(3)} degrees C`
}
