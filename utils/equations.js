import React from "react"

export function inchesToMm(inches) {
    let answer = inches * 25.4
    return `${inches} inches is ${answer}mm`
}

export function ouncesToMl(ounces) {
    let answer = ounces * 29.5735
    return `${ounces} ounces is ${answer}ml`
}

export function fahrenheitToCelsius(fahrenheit) {
    const celsius = ( fahrenheit - 32) * 5/9
    return `${fahrenheit} degrees fahrenheit is ${celsius} degrees celsius`
}

