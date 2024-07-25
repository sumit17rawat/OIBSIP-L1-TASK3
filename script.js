function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const result = document.getElementById('result');

    if (!isNaN(celsius) && celsius !== "") {
        const fahrenheitResult = (celsius * 9/5) + 32;
        result.textContent = `${celsius.toFixed(2)}°C is equal to ${fahrenheitResult.toFixed(2)}°F.`;
    } else if (!isNaN(fahrenheit) && fahrenheit !== "") {
        const celsiusResult = (fahrenheit - 32) * 5/9;
        result.textContent = `${fahrenheit.toFixed(2)}°F is equal to ${celsiusResult.toFixed(2)}°C.`;
    } else {
        result.textContent = 'Please enter a valid temperature value.';
    }
}
