const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertTemperature() {
  rl.question("Choose an option:\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Quit\nEnter your choice: ", function(choice) {
    if (choice === '1') {
      rl.question("Enter temperature in Fahrenheit: ", function(inputTemp) {
        const fahrenheit = parseFloat(inputTemp);
        const celsius = fahrenheitToCelsius(fahrenheit);
        console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
        convertTemperature();
      });
    } else if (choice === '2') {
      rl.question("Enter temperature in Celsius: ", function(inputTemp) {
        const celsius = parseFloat(inputTemp);
        const fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
        convertTemperature();
      });
    } else if (choice === '3') {
      rl.close();
    } else {
      console.log("Invalid choice. Please enter 1, 2, or 3.");
      convertTemperature();
    }
  });
}

console.log("Temperature Converter");
convertTemperature();
