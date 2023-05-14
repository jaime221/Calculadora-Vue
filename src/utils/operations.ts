// Declara la función calculate que toma un parámetro string_text
export const calculate = (string_text: string) => { 

// Declara una expresión regular que encuentra todos los operadores en la cadena de texto
const regex = /[+\-*/]/g; 

// Guarda todos los operadores en un array llamado tokens
const tokens = string_text.match(regex); 

// Separa los números en la cadena de texto y los convierte en números, guardándolos en un array llamado numbers
const numbers = string_text.split(regex).map(Number); 

// Asigna el primer número a la variable result
let result = numbers[0]; 

// Si hay operadores en la cadena de texto
if (tokens) { 

    // Itera a través de los operadores
  for (let i = 0; i < tokens?.length; i++) { 
    
    // Guarda el operador actual en la variable token
    const token = tokens[i]; 

    // Guarda el número siguiente al operador en la variable number
    const number = numbers[i + 1]; 

// Comprueba el tipo de operador y realiza la operación correspondiente
    switch (token) { 
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        result /= number;
        break;
    }
  }
}

return string_text = result.toString(); // Devuelve el resultado como una cadena de texto
};
