const conversionForm = document.getElementById('conversionForm');
const resultParagraph = document.getElementById('result');

conversionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const conversionType = parseInt(document.getElementById('conversionType').value);

    let convertedTemperature, conversionText;

    if (conversionType === 1) {
        convertedTemperature = (temperatureInput - 32) * (5 / 9);
        conversionText = `${temperatureInput}°F is ${convertedTemperature.toFixed(2)}°C`;
    } else {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        conversionText = `${temperatureInput}°C is ${convertedTemperature.toFixed(2)}°F`;
    }

    resultParagraph.textContent = conversionText;
});